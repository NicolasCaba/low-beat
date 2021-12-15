import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { AudioService } from '../../services/audio-service/audio.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');

  listObservers$: Subscription[] = [];
  state: string = 'paused';

  constructor( public audioService: AudioService ) { }

  ngOnInit(): void {
    const observer1$ = this.audioService.playerStatus$
      .subscribe((response) => {
        this.state = response;
      })

    this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(s => s.unsubscribe());
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const { clientX } = event;
    const { x, width } = elNative.getBoundingClientRect();

    const clickX = clientX - x;

    const percentage = (clickX * 100) / width;
    
    this.audioService.seekAudio(percentage);
  }

}
