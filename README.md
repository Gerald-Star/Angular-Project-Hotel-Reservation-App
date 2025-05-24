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