import { Component } from '@angular/core';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { FooterUserComponent } from '../footer-user/footer-user.component';
import { UserHotelsComponent } from '../user-hotels/user-hotels.component';
import { UserToursComponent } from '../user-tours/user-tours.component';
import { UserBookingsComponent } from '../user-bookings/user-bookings.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [UserNavbarComponent, FooterUserComponent, RouterModule, UserHotelsComponent, UserToursComponent, UserBookingsComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
