import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import {HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for API calls


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule, // Import RouterModule to enable router-outlet
    HomeModule,
    ReservationModule,
    HttpClientModule // Import HttpClientModule to enable HTTP requests

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
