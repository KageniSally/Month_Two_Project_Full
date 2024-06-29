import { Component } from '@angular/core';
import { toursInterface } from '../../Models/tourModel';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FooterUserComponent } from '../footer-user/footer-user.component';
import { ToursService } from '../../Services/tours.service';
import { BookingsAddComponent } from '../bookings-add/bookings-add.component';

@Component({
  selector: 'app-user-tours',
  standalone: true,
  imports: [CommonModule, UserNavbarComponent, FooterUserComponent,BookingsAddComponent],
  templateUrl: './user-tours.component.html',
  styleUrl: './user-tours.component.css'
})
export class UserToursComponent {
  tours: toursInterface[] = []

  constructor(private toursService: ToursService) { }

  ngOnInit(): void {
    this.toursService.getTours().subscribe(res => {
      console.log(res)
      this.tours = res
    })
  }


  
  openBookingForm(){

  }
}
