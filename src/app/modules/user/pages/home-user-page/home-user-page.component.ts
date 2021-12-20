import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { UserService } from '../../services/user.service';
import { AudioService } from '../../../../shared/services/audio-service/audio.service';

@Component({
  selector: 'app-home-user-page',
  templateUrl: './home-user-page.component.html',
  styleUrls: ['./home-user-page.component.css']
})
export class HomeUserPageComponent implements OnInit {

  userData: any = '';
  userTracks: any = '';

  constructor( private userService: UserService, private cookieService: CookieService, private audioService: AudioService ) { }

  ngOnInit(): void {
    this.getUserData();
    this.getUserTracks();
  }

  getUserData(): void {
    const id: string = this.cookieService.get('_id');
    this.userService.getUserData(id)
      .subscribe((response) => {
        try {
          this.userData = response.message[0];
        } catch (error) {
          console.log(error);
        }
        
      }, (error) => {
        console.log(error);
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
