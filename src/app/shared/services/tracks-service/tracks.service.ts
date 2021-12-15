import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ApiResponseInterface } from '@core/interfaces/api-response.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private readonly URL = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getAllTracks() {
    return this.http.get<any>(`${ this.URL }/users/tracks`);
  }
}
