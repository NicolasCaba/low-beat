import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewUserInterface } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly URL: string = environment.apiUrl;

  constructor( private httpClient: HttpClient ) { }

  sendRegister(data: NewUserInterface): Observable<any> {
    return this.httpClient.post(`${this.URL}/user/register`, data);
  }

  sendLogin(email: string, password: string): Observable<any>{
    const body = {
      email,
      password
    }

    return this.httpClient.post(`${this.URL}/user/login`, body);
  }
}
