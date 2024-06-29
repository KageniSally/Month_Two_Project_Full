import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { booking } from '../../Models/bookingModel';
import { BookingsService } from '../../Services/bookings.service';

@Component({
  selector: 'app-admin-bookings-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-bookings-display.component.html',
  styleUrl: './admin-bookings-display.component.css'
})
export class AdminBookingsDisplayComponent implements OnInit {
  bookings: booking[] = []

  constructor(private bookingService:BookingsService){}

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe(res => {
      console.log(res);
      this.bookings=res
    });
  }
}
