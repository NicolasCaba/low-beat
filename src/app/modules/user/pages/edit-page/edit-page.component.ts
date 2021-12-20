import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  trackId: string = '';
  track: any = {};

  form: FormGroup = new FormGroup({});
  fileImg: any = '';
  fileMp3: any = '';

  artistId: string = '';
  artistNickname: string = '';
  trackName: string = '';
  trackAlbum: string = '';
  trackGenre: string = '';

  errorUpdate: boolean = false;
  okUpdate: boolean = false;
  message: any = '';

  constructor( private activatedRoute: ActivatedRoute, private userService: UserService ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.trackId = params['id'];
      });
    
    this.userService.getTrack({id: this.trackId})
      .subscribe(track => {
        if(track.state === true) {
          this.track = track.message[0];
          this.artistId = this.track.artistId;
          this.artistNickname = this.track.artistNickname;
          this.trackName = this.track.name;
          this.trackAlbum = this.track.album;
          this.trackGenre = this.track.genre;
        }
      }, error => {
        console.log(error);
      })

    

    this.form = new FormGroup({
      artistName: new FormControl('' , [
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
      const formData = new FormData();
      formData.append('trackId', this.trackId);
      formData.append('artistId', this.artistId);
      formData.append('artistNickname', this.form.value.artistName);
      formData.append('name', this.form.value.trackName);
      formData.append('album', this.form.value.trackAlbum);
      formData.append('genre', this.form.value.trackGenre);
      formData.append('coverImg', this.fileImg);
      formData.append('track', this.fileMp3);

      this.userService.editTrack(formData)
        .subscribe(response => {
          this.okUpdate = true;
          this.message = response.message;
          this.errorUpdate = false;
        }, error => {
          console.log(error);
          this.errorUpdate = true;
          this.message = error;
        })
    } catch (error) {
      console.log(error);
      this.errorUpdate = true;
      this.message = error;
    }
  }

}
