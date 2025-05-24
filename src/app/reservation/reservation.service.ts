import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 
  // create a property to hold the reservation data
  // This property will be used to store the reservation data in memory
  // It will be an array of Reservation objects
  // The Reservation object will be defined in the models folder
  // The Reservation object will have properties like id, name, email, phone number, and reservation date
  // The Reservation object will be used to create a new reservation
  // The Reservation object will be used to update an existing reservation
  // The Reservation object will be used to delete a reservation
  // The Reservation object will be used to get all reservations
  private reservations: Reservation[] = [];

   // CRUD operations for reservation data

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }


  //* Add a new reservation to the list

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }


  // * Delete a reservation by id
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
  }

  //* Update an existing reservation by id

  updateReservation(updatedReservation: Reservation): void{
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
  }




  //*

  /*
   addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    const index = this.reservations.findIndex(res => res.id === id);
    if (index !== -1) {
      this.reservations[index] = updatedReservation;
    }
  }

  deleteReservation(id: string): void {
    this.reservations = this.reservations.filter(res => res.id !== id);
  }

  */
}


 
