import { Component, OnInit } from '@angular/core';

import { TracksService } from '@shared/services/tracks-service/tracks.service';

import { TrackInterface } from '@core/interfaces/tracks.interface';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  tracksData: TrackInterface[] = [];
  getTracks(): void {
    this.tracksService.getAllTracks()
      .subscribe(data => {
        this.tracksData = data.message;
      });
  }

  constructor( private tracksService: TracksService ) { }

  ngOnInit(): void {
    this.getTracks();
  }

}
