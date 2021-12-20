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

  getTrack(data: any): Observable<any> {
    return this.httpClient.post(`${this.URL}/user/track`, data);
  }

  createTrack(data: any): Observable<any> {
    return this.httpClient.post(`${this.URL}/user/track/create`, data);
  }

  getUserData(data: any): Observable<any> {
    const post = {
      id: data
    }
    return this.httpClient.post(`${this.URL}/user`, post);
  }

  getUserTracks(data: any): Observable<any> {
    const post = {
      artistId: data
    }
    return this.httpClient.post(`${this.URL}/user/tracks`, post);
  }

  editTrack(data: any): Observable<any> {
    return this.httpClient.post(`${this.URL}/user/track/update`, data);
  }

  deleteTrack(data: any): Observable<any> {
    return this.httpClient.post(`${this.URL}/user/track/delete`, data);
  }
}
