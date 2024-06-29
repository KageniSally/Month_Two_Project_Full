import { Component, OnInit } from '@angular/core';
import { AdminBookingsDisplayComponent } from '../admin-bookings-display/admin-bookings-display.component';
import { booking } from '../../Models/bookingModel';
import { AdminNavBarComponent } from '../admin-nav-bar/admin-nav-bar.component';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [AdminBookingsDisplayComponent,AdminNavBarComponent],
  templateUrl: './admin-bookings.component.html',
  styleUrl: './admin-bookings.component.css'
})
export class AdminBookingsComponent implements OnInit{
  constructor(){
   
  }
  ngOnInit(): void {
    console.log("here")
  }
  
}
