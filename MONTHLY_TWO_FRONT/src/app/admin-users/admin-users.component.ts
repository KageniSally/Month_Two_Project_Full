import { Component } from '@angular/core';
import { AdminUsersDisplayComponent } from '../admin-users-display/admin-users-display.component';

import { AdminNavBarComponent } from '../admin-nav-bar/admin-nav-bar.component';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [AdminUsersDisplayComponent,AdminNavBarComponent],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css'
})
export class AdminUsersComponent {

}
