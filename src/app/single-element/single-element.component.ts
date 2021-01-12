import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../models/list.model';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-single-element',
  templateUrl: './single-element.component.html',
  styleUrls: ['./single-element.component.css']
})
export class SingleElementComponent implements OnInit {

  detail : List = {name: "", birth_year: "", gender: ""};

  constructor(private route: ActivatedRoute,
    private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.showDetails();
  }

  showDetails() {
    //get route params
    const name = this.route.snapshot.params['name'];
    
    //get storage params
    const listStorage = JSON.parse(<string>localStorage.getItem("list"));
    this.detail = listStorage.find((item: List) => item.name == name);
  }

  onBack(){
    this.router.navigate(['/liste']);
  }

}
