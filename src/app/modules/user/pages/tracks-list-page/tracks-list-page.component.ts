import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AudioService } from '@shared/services/audio-service/audio.service';
import { CookieService } from 'ngx-cookie-service';
import { switchAll } from 'rxjs';
import { UserService } from '../../services/user.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-tracks-list-page',
  templateUrl: './tracks-list-page.component.html',
  styleUrls: ['./tracks-list-page.component.css']
})
export class TracksListPageComponent implements OnInit {

  userTracks: any[] = [];

  constructor( private audioService: AudioService, private cookieService: CookieService, private userService: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.getUserTracks();
  }

  editTrack(track: any) {
    this.router.navigate([`user/update-delete/update`], { queryParams: { id: `${track._id}` } });
  }

  deleteTrack(track: any) {
    this.userService.deleteTrack({id: track._id})
      .subscribe(response => {
        if(response.state === true) {
          Swal.fire({
            icon: 'success',
            title: 'Cancion eliminada correctamente'
          })
          this.getUserTracks();
        } else {
          Swal.fire({
            icon: 'error',
            title: response.message
          })
        }
      }, error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: error
        })
      })
  }

  getUserTracks(): void {
    const id: string = this.cookieService.get('_id');
    this.userService.getUserTracks(id)
      .subscribe((response) => {
        try {
          this.userTracks = response.message;
          console.log(this.userTracks);
        } catch (error) {
          console.log(error);
        }
      }, (error) => {
        console.log(error);
      })
  }

  sendTrack(track: any) {
    this.audioService.trackData$.next(track);
  }
}
