import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms'; // Import FormsModule for template-driven forms
import { RouterModule } from '@angular/router'; // Import RouterModule for routing



@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Import FormsModule to use template-driven forms
    ReactiveFormsModule, // Import ReactiveFormsModule to use reactive forms
    RouterModule
  ]
})
export class ReservationModule { }
