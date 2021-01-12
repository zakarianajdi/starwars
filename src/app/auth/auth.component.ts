import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean = false;
  authForm: any;
  login: String = "admin";
  password: String = "admin";

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.authForm = FormGroup;
  }

  ngOnInit() {
    this.initForm();
    this.authStatus = this.authService.isAuth;
  }

  initForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSignIn() {
    const form = this.authForm.value;
    this.login = form['email'];
    this.password = form['password'];

    this.authService.signIn(this.login, this.password).then(
      () => {
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['liste']);
      }
    );
  }

}
