import { Component } from '@angular/core';
import { toursInterface } from '../../Models/tourModel';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FooterUserComponent } from '../footer-user/footer-user.component';
import { BookingsAddComponent } from '../bookings-add/bookings-add.component';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { TourActions } from '../State/Actions/tour.action';
import { toursArraySelector } from '../State/Selectors/tour.selector';

@Component({
  selector: 'app-user-tours',
  standalone: true,
  imports: [CommonModule, UserNavbarComponent, FooterUserComponent, BookingsAddComponent],
  templateUrl: './user-tours.component.html',
  styleUrl: './user-tours.component.css'
})
export class UserToursComponent {
  tours: toursInterface[] = []

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.toursService.getTours().subscribe(res => {
    //   console.log(res)
    //   this.tours = res
    // })


    this.store.dispatch(TourActions.getTours())
    this.store.select(toursArraySelector).subscribe(res => {
      this.tours = res
    })
  }



  openBookingForm() {

  }
}
