import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { List } from '../models/list.model';

@Component({
  selector: 'app-edit-element',
  templateUrl: './edit-element.component.html',
  styleUrls: ['./edit-element.component.css']
})
export class EditElementComponent implements OnInit {

  editForm: any;
  list : string[] = [];
  detail : List = {name: "", birth_year: "", gender: ""};


  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute) {
    this.editForm = FormGroup;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    //get route params
    const name = this.route.snapshot.params['name'];
    
    //get storage params
    const listStorage = JSON.parse(<string>localStorage.getItem("list"));
    this.detail = listStorage.find((item: List) => item.name.trim() == name);

    this.editForm = this.formBuilder.group({
      name: [this.detail.name, [Validators.required]],
      birth_year: [this.detail.birth_year, Validators.required],
      gender: [this.detail.gender, Validators.required],
    });
  }

  onSubmit(){
    //const list = localStorage.getItem("list");
    //this.list = JSON.parse(<string>list);
    //this.list.push(this.editForm.value);
    localStorage.setItem("list", JSON.stringify(this.list));
    this.router.navigate(['/liste']);
  }

  onBack(){
    this.router.navigate(['/liste']);
  }

}
