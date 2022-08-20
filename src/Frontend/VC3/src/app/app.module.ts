import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as signalR from '@aspnet/signalr';
import { SignalrService } from './services/signalr.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SignalrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
