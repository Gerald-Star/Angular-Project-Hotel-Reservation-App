import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
// implement the router 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
  
  // This component is responsible for the reservation form
  // It uses Angular's Reactive Forms to handle form validation and submission

  // The form includes fields for name, email, phone number, and reservation date
  // The form is validated to ensure that all fields are filled out correctly
  // The form is submitted to the server when the user clicks the "Submit" button
  //* create a reservation FormGroup using FormBuilder

export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({}); // Initialize the form group

  // Create a constructor to initialize/invoke the form group with form controls and validation
  // Inject the FormBuilder and ReservationService into the component
  // Implement the Router to navigate to the reservation list page after successful submission
  constructor(private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,// Inject the Router to navigate after form submission
    private activatedRoute: ActivatedRoute // Inject the ActivatedRoute to access route parameters if needed
  ) {
    
   
  }
  // create a method to handle form submission
  // This method will be called when the form is submitted
  // It checks if the form is valid and if so, it will send the data to the server
  // If the form is not valid, it will display an error message
  ngOnInit(): void{
    this.reservationForm = this.formBuilder.group({
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      numberOfNights: ['', [Validators.required, Validators.min(1)]],
      numberOfGuests: ['', [Validators.required, Validators.min(1)]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      
    })
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id) {
      // If an ID is present in the route, fetch the reservation details for editing
      this.reservationService.getReservation(id).subscribe(reservation => {
        if(reservation) 
          this.reservationForm.patchValue(reservation); // Populate the form with existing data
      });
      
    }
  }


  // create a method onSubmit() that will be called when the form is submitted
  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      //this.reservationService.addReservation(reservation) - remove this line to add updateReservation method.
      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if (id) {
        // If an ID is present, update the existing reservation
        this.reservationService.updateReservation(id, reservation).subscribe(() => {
          console.log("Reservation updated successfully");
        });
      } else {
        // If no ID is present, add a new reservation
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log("Reservation added successfully");
        })
      }
   
    }
      // If the form is valid, send the data to the server
      //console.log('Form submitted successfully');
    // Here you can add your logic to send the form data to the server
    
    // call a method to the router to navigate to the reservation list page
    this.router.navigate(['/list']);
    
  }

}
