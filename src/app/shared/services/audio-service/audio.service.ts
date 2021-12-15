import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  public audio!: HTMLAudioElement;

  public trackData$: BehaviorSubject<any> = new BehaviorSubject('');
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);
  

  constructor() { 
    this.audio = new Audio();

    this.trackData$.subscribe(track => {
      if(track) {
        this.playAudio(track);
      }
    }, error => {
      console.log(error);
    })

    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime);
    this.audio.addEventListener('playing', this.setPlayerStatus);
    this.audio.addEventListener('play', this.setPlayerStatus);
    this.audio.addEventListener('pause', this.setPlayerStatus);
    this.audio.addEventListener('ended', this.setPlayerStatus);
  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play');
        break;
      case 'playing':
        this.playerStatus$.next('playing');
        break;
      case 'ended':
        this.playerStatus$.next('ended');
        break;
      default:
        this.playerStatus$.next('paused');
        break;
    }
  }

  playAudio(track: any) {
    this.audio.src = track.trackUrl;
    this.audio.play();
  }

  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause();
  }

  private calculateTime = () => {
    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(duration, currentTime);
    this.setPercentage(currentTime, duration);
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds:number = Math.floor(currentTime % 60);
    let minutes:number = Math.floor((currentTime / 60) % 60);
    
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`;

    this.timeElapsed$.next(displayFormat);
  }

  private setTimeRemaining(duration: number, currentTime: number) {
    let timeLeft = duration - currentTime;

    let seconds: number = Math.floor(timeLeft % 60);
    let minutes: number = Math.floor((timeLeft / 60) % 60);
    
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`;

    this.timeRemaining$.next(displayFormat);
  }

  private setPercentage(currentTime: number, duration: number): void {
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage);
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio;
    const second = (duration * percentage) / 100;

    this.audio.currentTime = second;
  }
  
}
