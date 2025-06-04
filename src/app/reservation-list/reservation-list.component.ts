import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
  
  // This component is responsible for displaying a list of reservations
  // It uses the ReservationService to fetch the reservations from the server
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = []

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    // Fetch the list of reservations from the server when the component initializes
    //this.reservation = this.reservationService.getReservations(); 
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }

  // Method to delete a reservation by its ID
  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Reservation deleted successfully");
    }
    )
    // After deleting, refresh the list of reservations
    //this.reservation = this.reservationService.getReservations();
    //this.reservationService.getReservations().subscribe(reservations => {
      //this.reservations = reservations;
    //});
  } 

}
