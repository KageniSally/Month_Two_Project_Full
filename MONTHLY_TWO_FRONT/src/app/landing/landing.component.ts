import { Component } from '@angular/core';
import { NavUserComponent } from '../nav-user-landing/nav-user.component';
import { FooterUserComponent } from '../footer-user/footer-user.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavUserComponent,NavUserComponent,FooterUserComponent,RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
