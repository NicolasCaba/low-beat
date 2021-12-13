import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Toggle navbar & sidebar
  @Output() onNuevoToggle: EventEmitter<boolean> = new EventEmitter();

  toggle: boolean = false;
  
  toogleNav(): void {
    this.toggle = !this.toggle;
    this.onNuevoToggle.emit( this.toggle );
  }

  constructor() { }

  ngOnInit(): void {
  }

}
