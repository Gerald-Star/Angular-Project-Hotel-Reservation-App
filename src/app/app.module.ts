import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';







@NgModule({
  declarations: [
    AppComponent,
  
  
   
   
   
  ],
  imports: [
    BrowserModule,
    RouterModule // Import RouterModule to enable router-outlet

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
