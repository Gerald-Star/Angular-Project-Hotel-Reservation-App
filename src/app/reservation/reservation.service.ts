import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  // This property will be used to store the reservation data in memory
  // It will be an array of Reservation objects
  // The Reservation object will have properties like id, name, email, phone number, and reservation date
  // The Reservation object creation follows a CRUDE pattern (Create, Read, Update, Delete)

  private apiUrl = "http://localhost:3000"; // Replace with your API endpoint
  private reservations: Reservation[] = [];

  //* To use API, we will create a service that will handle the reservation data and manage CRUD operations.
  //* The service will be responsible for fetching, adding, updating, and deleting reservations.

  constructor(private http: HttpClient){}

  // The constructor is used to initialize the reservation data
  // It checks if there are any reservations stored in localStorage
  // If there are reservations stored in localStorage, it will load them into the reservations array
  //! Remove the constructor to use API for reservation data management
  /*
  constructor() {
    // Load reservations from localStorage if available
    const storedReservations = localStorage.getItem("reservations");
    if (storedReservations) {
      this.reservations = JSON.parse(storedReservations);
    }
  }
*/
   // CRUD operations for reservation data, now change all reservations to use API CRUDE operations
  /*
  getReservations(): Reservation[] {
    //return this.reservations;
    return this.reservations
  }*/
  
  //this.http.get(`${this.apiUrl}/reservations`);

  // Rewriting to use API 
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  } // This method returns an Observable of Reservation array, which can be subscribed to in components
  // on reservation-list.component.ts, we will subscribe to this observable to get the reservation data ngOnInit()

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/"+id);
  }

  //* Add a new reservation to the list and use localStorage to store the reservations

  addReservation(reservation: Reservation): Observable<void> {
    
    return this.http.post<void>(this.apiUrl + "/reservation", reservation)
    // Generate a unique ID for the reservation
    //reservation.id = Date.now().toString(); // Using timestamp as a simple unique ID
    //this.reservations.push(reservation);
    //localStorage.setItem("reservations", JSON.stringify(this.reservations))
    //console.log(this.reservations);
    // Optionally, you can log the reservation to the console for debugging
    // console.log('Reservation added:', reservation);
  }

  // * Delete a reservation by id

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id);
    
    //let index = this.reservations.findIndex(res => res.id === id);
    //this.reservations.splice(index, 1);
    //localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }

  //* Update an existing reservation by id

  updateReservation(id: string, updatedReservation: Reservation): Observable <void>{
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation);
      
      
    // let index = this.reservations.findIndex(res => res.id === id);
    //this.reservations[index] = updatedReservation;
    //localStorage.setItem("reservations", JSON.stringify(this.reservations))
  }
 
}


 
