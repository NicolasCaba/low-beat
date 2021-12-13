import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { NewUserInterface } from '../../interfaces/user.interface';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  errorRegister: boolean = false;
  okRegister: boolean = false;
  message: any = '';

  constructor( private loginService: LoginService ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.nullValidator
      ]),
      nickname: new FormControl('', [
        Validators.required,
        Validators.nullValidator
      ]),
      nationality: new FormControl('', [
        Validators.required,
        Validators.nullValidator
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.nullValidator
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    });
  }

  sendRegister(): void {
    const data: NewUserInterface = this.form.value;
    this.loginService.sendRegister(data)
      .subscribe((response) => {
        console.log(response)
        if (response.state === false) {
          this.errorRegister = true;
          this.message = response;
        } else {
          this.okRegister = true;
          this.message = response;
          this.errorRegister = false;
        }
      }, (error) => {
        console.log('Error al intentar registrar',error);
        this.errorRegister = true;
        this.message = error;
      });
  }

  

}
