
# 🏨 Hotel Reservation App

An Angular-based single-page application (SPA).

### Overview:

This is a responsive Angular-based web application designed to showcase hotel rooms reservation in a clean, user-friendly grid layout. Users can browse available rooms dynamically loaded from a data source and easily navigate to a booking and be able to edit form to reserve their chosen room.

###  Key Angular Concepts Used

| Concept       | Explanation |
|---------------|-------------|
| `@Injectable` | Marks the class as available to be injected as a service throughout the app. Used for dependency injection. |
| `HttpClient`  | CRUD operations using HTTP and Angular services. Angular's built-in service to make HTTP requests (GET, POST, PUT, DELETE). |
| `Observable`  | Part of RxJS. It allows asynchronous data handling (e.g., HTTP responses). Components can `subscribe()` to it. |
|  Dynamic hotel room grid using `*ngFor` o render a list of hotel rooms dynamically, enabling scalable and maintainable UI updates. |
|  Smooth routing with `routerLink` |
| Lazy-loaded modules (e.g., `HomeModule`, `ReservationModule`)

---


`@Injectable`, `HttpClient`, and `Observable`, along with a breakdown of the reservation service, routing, and form structure.

---


## 🧠 Angular Services with HttpClient

### `reservation.service.ts`

```ts
@Injectable({ providedIn: 'root' })
export class ReservationService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservation/${id}`);
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/reservation`, reservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reservation/${id}`);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/reservation/${id}`, updatedReservation);
  }
}
```

###  `@Injectable({ providedIn: 'root' })`

| Feature       | Explanation                                                                 |
|---------------|------------------------------------------------------------------------------|
| What it does  | Marks the service (e.g., `ReservationService`) as injectable.               |
| Why used      | Enables Angular to create a singleton instance app-wide.                    |
| Summary       | Makes the service available across the entire app via dependency injection. |

---

###  `HttpClient` – Used to Make API Calls

| Feature       | Explanation                                                                 |
|---------------|------------------------------------------------------------------------------|
| What it does  | Enables HTTP requests (GET, POST, PUT, DELETE) via Angular’s HttpClient.    |
| Where it's from | `@angular/common/http` module                                               |
| Example       | `constructor(private http: HttpClient) {}` injects the service in a class.  |

---

### `Observable<T>` – Reactive Data Handling

| Feature       | Explanation                                                                 |
|---------------|------------------------------------------------------------------------------|
| What it does  | A stream of data from RxJS that allows async operations and subscriptions.  |
| Use in Http   | Methods like `http.get()` return Observables that emit API data.            |
| Benefit       | Reacts to data changes without page reloads; supports chaining and operators.|

---

### ReservationService Methods Breakdown

| Function                | HTTP Method | URL                    | Purpose                            |
|-------------------------|-------------|-------------------------|-------------------------------------|
| `getReservations()`     | GET         | `/reservations`         | Fetch all reservations              |
| `getReservation(id)`    | GET         | `/reservation/:id`      | Fetch a specific reservation by ID  |
| `addReservation()`      | POST        | `/reservation`          | Create a new reservation            |
| `deleteReservation(id)` | DELETE      | `/reservation/:id`      | Delete reservation by ID            |
| `updateReservation()`   | PUT         | `/reservation/:id`      | Update existing reservation         |


## Backend Mock API (Mockoon)

Mockoon is used to simulate REST API endpoints:
- `GET /reservations` - Fetch all reservations
- `POST /reservation` - Add a new reservation
- `PUT /reservation/:id` - Update a reservation
- `DELETE /reservation/:id` - Delete a reservation

Example response from `GET /reservations`:
```json
[
  {
    "id": 1,
    "guestName": "Gerald",
    "guestEmail": "gerald@gmail.com",
    "numberOfNights": 5,
    "numberOfGuests": 5,
    "checkInDate": "2023-08-08",
    "checkOutDate": "2023-08-10"
  }
]
```

---

### Sample: Get All Reservations

```ts
getReservations(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
}
```

```ts
// In a component
this.reservationService.getReservations().subscribe(res => this.reservations = res);
```

---

### Reservation Form Fields & Validation

### Form Summary


### `reservation-list.component.html` Creates the UI form

This markup creates a responsive, visually organized table that lists all reservations.

It uses Angular’s *ngFor directive to render the list dynamically from component data.

Bootstrap classes enhance responsiveness, color coding, and layout.

Action buttons let users delete or edit each reservation directly from the list.


```ts
<tbody>
  <tr *ngFor="let reservation of reservations">
    <td class="table-info text-nowrap">{{ reservation.guestName }}</td>
    <td class="table-warning text-nowrap">{{ reservation.guestEmail }}</td>
    <td class="table-success text-nowrap">{{ reservation.numberOfNights }}</td>
    <td class="table-secondary text-nowrap">{{ reservation.numberOfGuests }}</td>
    <td class="table-danger text-nowrap">{{ reservation.checkInDate | date }}</td>
    <td class="table-danger text-nowrap">{{ reservation.checkOutDate | date }}</td>
    <td>
      <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
        <button class="btn btn-sm btn-danger" (click)="deleteReservation(reservation.id)">
          Delete
        </button>
        <button class="btn btn-sm btn-secondary" [routerLink]="['/edit', reservation.id]">
          Edit
        </button>
      </div>
    </td>
  </tr>
</tbody>

```
<tbody> contains the table data rows.

| Field              | Type    | Purpose                       | Validation (if empty & touched) |
|--------------------|---------|-------------------------------|----------------------------------|
| Check-In Date      | `date`  | Start of the reservation       | ✅                              |
| Check-Out Date     | `date`  | End of the reservation         | ✅                              |
| Guest Name         | `text`  | Full name of the guest         | ✅                              |
| Guest Email        | `text`  | Email address of the guest     | ✅                              |
| Number of Nights   | `number`| Total number of nights         | ✅                              |
| Number of Guests   | `number`| Total guests included          | ✅                              |

### Field Descriptions

| Field Name         | Type    | Description                                       |
|--------------------|---------|---------------------------------------------------|
| `id`               | string  | Unique identifier for each reservation            |
| `guestName`        | string  | Name of the guest making the reservation          |
| `guestEmail`       | string  | Email address for contact                         |
| `numberOfNights`   | number  | Number of nights for the reservation              |
| `numberOfGuests`   | number  | Total guests included in the reservation          |
| `checkInDate`      | Date    | Start date of the stay                            |
| `checkOutDate`     | Date    | End date of the stay                              |

---


### Models

### `reservation.model.ts`
```ts
export interface Reservation {
  id?: string;
  guestName: string;
  guestEmail: string;
  numberOfNights: number;
  numberOfGuests: number;
  checkInDate: string;
  checkOutDate: string;
}
```

- Defines the shape of reservation data used across components and services.

---

### Routing Overview

| Path         | Component                 | Description                                                    |
|--------------|---------------------------|----------------------------------------------------------------|
| `""`         | `HomeComponent`           | Homepage – displays available rooms                            |
| `"list"`     | `ReservationListComponent`| Shows all reservations                                          |
| `"new"`      | `ReservationFormComponent`| Opens a blank form to create a new reservation                  |
| `"edit/:id"` | `ReservationFormComponent`| Loads a form pre-filled with an existing reservation (by `id`)  |

---

### Root Component – `AppComponent`

The entry point of the application that provides the layout shell and global styles.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-reservation-app';
}
```

### Explanation

| Property      | Meaning                                                                 |
|---------------|-------------------------------------------------------------------------|
| `selector`    | Defines the tag to bootstrap the app: `<app-root></app-root>`          |
| `templateUrl` | Points to the layout HTML file (`app.component.html`)                  |
| `styleUrls`   | Points to component-level CSS for styling                              |
| `title`       | A simple variable that can be interpolated using `{{ title }}`         |

---

### Why `Observable` + `HttpClient` Is Powerful

-  **Reactive:** Responds to data changes in real-time.
-  **Asynchronous:** Non-blocking UI – no full reloads.
-  **Composable:** You can transform and handle streams using RxJS operators like `map`, `filter`, `catchError`, etc.

---

### App Structure

### `app.module.ts`

```ts
@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReservationModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- Registers all core modules and components.
- Integrates routing and HTTP functionality for API communication.

---

## Models

### Routing (`app-routing.module.ts`)

### NgModule Metadata

- NgModule decorator from Angular core

```ts
import { NgModule } from '@angular/core';

```
- Defines the Angular module that configures and exports routing for the app.

----

```ts
@NgModule({
  declarations: [],
  //imports: [CommonModule]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

```

declarations: []: No components, directives, or pipes declared here because this is a routing module only.

imports: [RouterModule.forRoot(routes)]: Registers the routes at the root level using forRoot(). This tells Angular to configure the router with these routes.

exports: [RouterModule]: Exports RouterModule so that components that import this routing module get access to router directives (like routerLink, routerOutlet).

-----


NB commonModule 
//import { CommonModule } from '@angular/common';
This line is commented out and not currently used. CommonModule provides common Angular directives (like ngIf, ngFor) and is often imported in feature modules but not strictly necessary here since routing module typically doesn’t use it directly.

------

#### Imports the Angular Router's core modules:

```ts
  import { RouterModule, Routes } from '@angular/router';

```

- RouterModule is used to configure the router at the application’s root or feature level.

- Routes is the type that defines an array of route configurations.


#### Routes Array

- Defines the routes for the application
  
T- his file sets up navigation paths for your app using Angular Router.

- It connects URLs to components so users can navigate between home, reservation list, and form pages.

- Supports parameterized routes for editing by reservation ID.

```ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ReservationListComponent },
  { path: 'new', component: ReservationFormComponent },
  { path: 'edit/:id', component: ReservationFormComponent }
];
```

- Defines paths for home view, reservation list, new reservation form, and edit form.
- Uses parameterized routes like `/edit/:id` for updating specific reservations.

- { path: "", component: HomeComponent }: The default route ("" means root path). When users visit the base URL, HomeComponent is shown.

- { path: "list", component: ReservationListComponent }: When navigating to /list, the reservation list page shows (ReservationListComponent).

- { path: "new", component: ReservationFormComponent }: When navigating to /new, the reservation form page is shown for creating a new reservation.

- { path: "edit/:id", component: ReservationFormComponent }: When navigating to /edit/someId, the reservation form component is used again, but this time to edit an existing reservation with the given id parameter (URL parameter).

---

### Components Overview

### `AppComponent`

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-reservation-app';
}
```
- Root component of the app.
- Acts as the shell for rendering routed views.

---

#### This is a custom Angular component selector for the HomeComponent.

```ts
<app-home></app-home>

```

- Including <app-home> here means that the home component’s  template will be rendered inside this view as well. This might be used to show the main page or room grid alongside the reservation list.
------

---

## Angular Services with HttpClient

### `reservation.service.ts`

```ts
@Injectable({ providedIn: 'root' })
export class ReservationService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservation/${id}`);
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/reservation`, reservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reservation/${id}`);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/reservation/${id}`, updatedReservation);
  }
}
```

### Reservation List Component

### `reservation-list.component.ts`

#### Imports necessary Angular and application-specific classes:

```ts
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

```

Component and OnInit from Angular core to create a component and hook into its lifecycle.

ReservationService is a service responsible for managing reservation data, such as fetching or deleting reservations from a backend.

Reservation is a TypeScript interface or class defining the shape/type of a reservation object.

--------


### `ReservationListComponent`

This component fetches a list of reservations from a backend service when it loads.

It holds the reservations in a property that the template uses to display a table.

It provides a method to delete reservations by calling the service and (ideally) refreshing the displayed list afterward.

Uses Angular’s reactive programming with Observables (subscribe) for async data handling.

```ts
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(res => {
      this.reservations = res;
    });
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Reservation deleted");
    });
  }
}
```

- Retrieves data from the service using `getReservations()`.
- Uses `Observable.subscribe()` to update the local array.
- Supports delete functionality with `deleteReservation(id)`.

---

```ts
export class ReservationListComponent implements OnInit {

```
Defines the actual component class.

Implements OnInit interface to run code after component initialization.

-----


```ts
reservations: Reservation[] = []

```
-------

Declares a class property named reservations as an array of Reservation objects.

Initialized as an empty array to hold the list of reservations fetched from the backend.


```ts

constructor(private reservationService: ReservationService) {}

```

Angular dependency injection injects an instance of ReservationService into this component via the constructor.

This allows the component to use reservationService methods to fetch or delete reservations.

--------


```ts
ngOnInit(): void {
  // Fetch the list of reservations from the server when the component initializes
  this.reservationService.getReservations().subscribe(reservations => {
    this.reservations = reservations;
  });
}

```

The Angular lifecycle method that runs after the component is created.

Calls getReservations() method of the service which returns an Observable (async data stream).

Subscribes to the observable to get the actual reservations data when available, then assigns it to the reservations array to display in the template.

--------


```ts
deleteReservation(id: string) {
  this.reservationService.deleteReservation(id).subscribe(() => {
    console.log("Reservation deleted successfully");
  })
  // After deleting, you might want to refresh the list by fetching reservations again
}

```

Defines a method to delete a reservation by its unique id.

Calls deleteReservation(id) from the service, which returns an Observable.

Subscribes to the Observable to perform actions once the deletion completes, here just logging success.

The code comments suggest refreshing the list after deletion to update the UI, but this is currently commented out and not implemented.

----------

###  Models

### `reservation.model.ts`

- Defines the shape of reservation data used across components and services.

---

### Setup & Run

1. **Install dependencies**  
   ```bash
   npm install
   ```

2. **Run Angular App**  
   ```bash
   ng serve
   ```

3. **Start Mock API**  
   Open [Mockoon](https://mockoon.com/) and run the mock server from the provided environment file or configuration.

---

### Future Improvements

- Form validations for reservations
- Filters for date ranges and guest count
- Integrate persistent database and real backend
- Improve styling with Angular Material or TailwindCSS

---

### Author

Built by [Your Name] as a portfolio project.  
Inspired by the need to demonstrate routing, services, API integration, and component communication in Angular.










































































# HotelReservationApp


## Project Setup using a Simple CRUDE Rest API

## Create Reservation
- Create

## List Reservation
- Read


## Edit Reservation
- Update


## Delete Reservation
-Delete

## Router-outlet - an Angular Component called the RouteModule

### The app.component.html has the router-outlet
-importing <router-outlet></router-outlet> on the app.module.ts


### Import the RouteModule on the app.module.ts
## All the Angular Components on the app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { BookListsComponent } from './book-lists/book-lists.component';




@NgModule({
  declarations: [
    AppComponent,
    ReservationListComponent,
    BookListsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    RouterModule // Import RouterModule to enable router-outlet

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


',' expected.ts(1005)
(alias) class RouterModule
import RouterModule
@description
Adds directives and providers for in-app navigation among views defined in an application. Use the Angular Router service to declaratively specify application states and manage state transitions.

You can import this NgModule multiple times, once for each lazy-loaded bundle. However, only one Router service can be active. To ensure this, there are two ways to register routes when importing this module:

The forRoot() method creates an NgModule that contains all the directives, the given routes, and the Router service itself.
The forChild() method creates an NgModule that contains all the directives and the given routes, but does not include the Router service.
@see
Routing and Navigation guide for an overview of how the Router service should be used.

@publicApi


## To start Angular on the browser -local step up dor Angular Live Development
npx ng serve

## How to build a module in Angular

 npx ng generate module home

## You create a module example Home

## You can attach all the components that is to be inside the module with this command
npx ng generate component home --module=home

## Create another module reservation and attache their components

npx ng generate component reservation-list --module=reservation


## How to create a Service in Angular using npx for local setup

npx ng generate service reservation/reservation



## How to create interface

npx ng g i models/reservation


## What is Angular Router
- By using the Angular Router you can assign several components to it.

- ng generate module app-routing --flat --module=app


## 📌 How to Add app-routing.module.ts in an Angular Project
In Angular, routing helps navigate between different views (components). If your project doesn’t have app-routing.module.ts, you can generate it manually. Let’s go step by step. 🚀

✅ 1. Generate the Routing Module Using Angular CLI
Run this command inside your Angular project folder:

- ng generate module app-routing --flat --module=app
What this does:

Creates app-routing.module.ts in the src/app/ folder.
Automatically imports it into app.module.ts.
--flat ensures it’s created in the app/ folder instead of a subfolder.
--module=app tells Angular to import it into app.module.ts.


### Twp Types of Form Validation in Angular

1. Reactive Form Validation - Validate Form in TypeScript Class
2. Template Driven Form Validation - Template Driven Form Validation

- To use the Reactive Form Validation : Import import { FormBuilder, FormGroup, Validators } from '@angular/forms';


## Form listener (ngSubmit)
" Use to submit a form by creating a button =onSubmit"

## What is dependency injection in Angular
# Make a validation using
*ngIf 


#
*ngOnIit(): void 

## How to use Dependency Injection in Angular / on the constructor 

* Here you use constructor(private formBuilder: FormBuilder) {
* // codes
* }


### How to use LocalStorage in storing logins

##### Develop a login with first name, family name, email and password, store it on a localStorage
Use 


### LifeCycle Hooks in Angular
*ngOnInit


### Using ng template syntax to iterate over reservations
### Using ngFor to iterate over the reservation array and display each reservation's details
<p *ngIf="reservation.length === 0">No reservations found.</p>

<ul>
  <ng-container *ngFor="let reservation of reservation">
    <li>
      Guest: {{ reservation.guestName }}<br>
      Email: {{ reservation.guestEmail }}<br>
      Room No: {{ reservation.roomNumber }}<br>
      Check-in: {{ reservation.checkInDate | date }}<br>
      Check-out: {{ reservation.checkOutDate | date }}<br>
    </li>
  </ng-container>
<!-- This code displays a list of reservations with guest details and check-in/check-out dates -->



### How to navigate users inside your applications from one page to another using the router method 





## STEP PROCESSES

Want to Test It?


Injecting ReservationService into your component.

Calling getReservations() inside ngOnInit() and logging the result.


ngOnInit() {
  this.reservationService.getReservations().subscribe(data => {
    console.log(data); // Should log array of reservations from mock
  });
}



## B: Create a New Environment (if you want to use {{url}}) on Postman
On the left sidebar, click "Environments".

Click "New" → "Environment".

Add a variable:

Key: url

Initial Value: https://<mock-id>.mock.pstmn.io

Current Value: https://<mock-id>.mock.pstmn.io

Click “Save”.

In the top-right corner of Postman, select this environment from the dropdown.


https://bf58adcf-72d8-43d9-927b-6824c7142b89.mock.pstmn.io