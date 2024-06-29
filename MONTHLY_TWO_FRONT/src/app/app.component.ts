import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import 'boxicons'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, RegisterComponent,LoginComponent,LandingComponent,UserDashboardComponent,AdminDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MONTHLY_TWO_FRONT';
}
