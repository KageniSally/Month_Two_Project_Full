import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { booking } from '../../Models/bookingModel';
import { FooterUserComponent } from '../footer-user/footer-user.component';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { BookingsService } from '../../Services/bookings.service';

@Component({
  selector: 'app-user-bookings',
  standalone: true,
  imports: [CommonModule,FooterUserComponent,UserNavbarComponent],
  templateUrl: './user-bookings.component.html',
  styleUrl: './user-bookings.component.css'
})
export class UserBookingsComponent {
  bookings: booking[] = []

  constructor(private bookingService:BookingsService){}
  user_Id!:string


  ngOnInit(): void {
    this.user_Id=this.getUserId()
    this.bookingService.getBooking().subscribe(res => {
      console.log(res);
      this.bookings=res
    });
  }


  getUserId(): string {
    return localStorage.getItem('userId') as string;
  }
}
