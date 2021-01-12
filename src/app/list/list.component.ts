import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service'
import { List } from '../models/list.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: any[] = [];
  constructor(private listService: ListService,
    private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  OnDeleteById(id: number) {
    this.list.splice(id, 1);
    localStorage.setItem("list", JSON.stringify(this.list));
  }

  onDelete() {
    this.list.splice(0, this.list.length);
    localStorage.clear();
  }

  getData() {   
    if (localStorage.getItem("list") !== null) {
      this.list = JSON.parse(<string>localStorage.getItem("list"));
    } else {
      this.listService.getList()
        .subscribe((data: any) => {
          this.list = data.results;
          localStorage.setItem("list", JSON.stringify(this.list));
        });
    }
  }

  showDetails(name: string) {
    this.router.navigate(['/liste', name]);
  }

  onCreate() {
    this.router.navigate(['/add-element']);
  }

  onEdit(name: string) {
    const param = name.trim();
    this.router.navigate(['/edit-element', param]);
  }

  onSearch(event: any){
    console.log(event.target.value);
  }
}
