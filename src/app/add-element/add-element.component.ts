import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  addForm: any;
  list : string[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.addForm = FormGroup;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      birth_year: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  onSubmit(){
    const list = localStorage.getItem("list");
    this.list = JSON.parse(<string>list);
    this.list.push(this.addForm.value);
    localStorage.setItem("list", JSON.stringify(this.list));
    this.router.navigate(['/liste']);
  }

  onBack(){
    this.router.navigate(['/liste']);
  }

}
