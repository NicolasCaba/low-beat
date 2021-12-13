import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ApiResponseInterface } from '@core/interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private apiUrl: string = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getAllTracks() {
    const url: string = `${ this.apiUrl }/tracks`;
    return this.http.get<ApiResponseInterface>(url);
  }
}
