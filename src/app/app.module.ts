import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { UrlshortComponent } from './components/urlshort/urlshort.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FullscreenComponent } from './components/shared/fullscreen/fullscreen.component';
import { NormalscreenComponent } from './components/shared/normalscreen/normalscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    UrlshortComponent,
    DashboardComponent,
    FullscreenComponent,
    NormalscreenComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
