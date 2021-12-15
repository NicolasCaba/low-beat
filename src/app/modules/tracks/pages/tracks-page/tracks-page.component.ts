import { Component, OnInit } from '@angular/core';

import { TracksService } from '@shared/services/tracks-service/tracks.service';
import { AudioService } from '../../../../shared/services/audio-service/audio.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  tracksData: any[] = [];
  getTracks(): void {
    this.tracksService.getAllTracks()
      .subscribe(data => {
        this.tracksData = data.message;
      });
  }

  constructor( private tracksService: TracksService, private audioService: AudioService ) { }

  ngOnInit(): void {
    this.getTracks();
  }

  sendTrack(track: any) {
    this.audioService.trackData$.next(track);
  }

}
