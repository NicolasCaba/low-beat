import { Injectable } from '@angular/core';
import { TrackInterface } from '@core/interfaces/tracks.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private trackMock: TrackInterface = {
    artist: {name: '', nickname: '', nationality:''}, 
    name: '', 
    album: '', 
    duration: {start:0, end: 0}, 
    coverImg: '', 
    url: ''
  };

  public trackData$: BehaviorSubject<TrackInterface> = new BehaviorSubject(this.trackMock);

  constructor() { }
}
