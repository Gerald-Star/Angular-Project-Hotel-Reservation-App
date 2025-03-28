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




## How to build a module in Angular

 npx ng generate module home

## You create a module example Home

## You can attach all the components that is to be inside the module with this command
npx ng generate component home --module=home

## Create another module reservation and attache their components

npx ng generate component reservation-list --module=reservation


## How to create a Service

npx ng generate service reservation/reservation



## How to create interface

npx ng g i models/reservation