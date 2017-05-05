import { Component, OnInit } from '@angular/core';

declare var FlipClock:any;
declare var $:any;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var clock = new FlipClock($('.flipClock'), {
          clockFace: 'TwelveHourClock'
    });
  }

}
