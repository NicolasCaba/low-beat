import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  toggle: boolean = false;

  @ViewChild('#main') main:any;

  toggleNav( toggle: boolean ): void {
    this.toggle = toggle;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
