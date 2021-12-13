import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  errorRegister: boolean = false;
  okRegister: boolean = false;
  message: any = '';

  constructor( private loginService: LoginService, private cookieservice: CookieService, private router: Router ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    })
  }

  sendLogin(): void {
    this.loginService.sendLogin(this.form.value.email, this.form.value.password)
      .subscribe((response) => {
        if(response.state === false) {
          this.errorRegister = true;
          this.message = response;
        } else {
          console.log(response);
          const { session, tokenSession } = response;
          this.cookieservice.set('token', tokenSession, 1, '/',);
          this.cookieservice.set('_id', session._id, 1, '/',);
          this.cookieservice.set('name', session.name, 1, '/',);

          this.okRegister = true;
          this.message = response;
          this.errorRegister = false;

          this.router.navigate(['/', 'tracks']);
        }
      }, (error) => {
        this.errorRegister = true;
        this.message = error;
      });
  }

}
