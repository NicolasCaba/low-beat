import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly URL = environment.apiUrl;

  constructor( private httpClient: HttpClient ) { }

  createTrack(data: any): Observable<any> {
    return this.httpClient.post(`${this.URL}/user/track/create`, data);
  }
}
