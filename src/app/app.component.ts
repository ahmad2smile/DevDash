import { Component } from '@angular/core';
import { UrlshortService } from './services/urlshort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
      UrlshortService
  ]
})
export class AppComponent {

}
