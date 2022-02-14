import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onSettings = new EventEmitter();
  @Output() onMenu = new EventEmitter();
  @Output() onToggleSidebar = new EventEmitter();

}
