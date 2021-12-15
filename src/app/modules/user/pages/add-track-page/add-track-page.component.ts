import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-track-page',
  templateUrl: './add-track-page.component.html',
  styleUrls: ['./add-track-page.component.css']
})
export class AddTrackPageComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  fileImg: any = '';
  fileMp3: any = '';

  constructor( private userService: UserService ,private cookierService: CookieService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      artistName: new FormControl('', [
        Validators.required
      ]),
      trackName: new FormControl('', [
        Validators.required
      ]),
      trackAlbum: new FormControl('', [
        Validators.required
      ]),
      trackGenre: new FormControl('', [
        Validators.required
      ]),
      fileCover: new FormControl('', [
        Validators.required
      ]),
      fileTrack: new FormControl('', [
        Validators.required
      ])
    });
  }

  saveFileImg(event: any): any {
    const file = event.target.files[0];
    this.fileImg = file;
  }
  saveFileMp3(event: any): any {
    const file = event.target.files[0];
    this.fileMp3 = file;
  }

  send() {
    try {
      const cookie = this.cookierService.get('_id');

      const formData = new FormData();
      formData.append('artistId', cookie);
      formData.append('artistNickname', this.form.value.artistName);
      formData.append('name', this.form.value.trackName);
      formData.append('album', this.form.value.trackAlbum);
      formData.append('genre', this.form.value.trackGenre);
      formData.append('coverImg', this.fileImg);
      formData.append('track', this.fileMp3);

      this.userService.createTrack(formData)
        .subscribe((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        })
    } catch (error) {
      console.log(error);
    }
  }

}
