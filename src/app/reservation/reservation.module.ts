import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms'; // Import FormsModule for template-driven forms

@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Import FormsModule to use template-driven forms
    ReactiveFormsModule // Import ReactiveFormsModule to use reactive forms
  ]
})
export class ReservationModule { }
