import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router'; // Import RouterModule



@NgModule({
  declarations: [
    // Declare components here if any
    // You can add components, directives, and pipes here
    HomeComponent
  ], 
  
  imports: [
    CommonModule,
    RouterModule // Import RouterModule to enable router-outlet

  ]
})
export class HomeModule { }
