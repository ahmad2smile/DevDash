import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icon-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.css'],
  host: {'class': 'app-icon'}
})
export class FullscreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
