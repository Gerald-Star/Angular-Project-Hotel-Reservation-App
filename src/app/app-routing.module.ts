import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "list", component: ReservationListComponent },
  { path: "new", component: ReservationFormComponent },
  {path: "edit/:id", component: ReservationFormComponent}, // Assuming you want to edit a reservation by ID
];

@NgModule({
  declarations: [],
  //imports: [CommonModule]
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }



 