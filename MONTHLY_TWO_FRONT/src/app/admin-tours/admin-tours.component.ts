import { Component } from '@angular/core';
import { AdminToursAddComponent } from '../admin-tours-add/admin-tours-add.component';
import { AdminToursDisplayComponent } from '../admin-tours-display/admin-tours-display.component';

import { AdminNavBarComponent } from '../admin-nav-bar/admin-nav-bar.component';

@Component({
  selector: 'app-admin-tours',
  standalone: true,
  imports: [AdminToursAddComponent,AdminToursDisplayComponent,AdminNavBarComponent],
  templateUrl: './admin-tours.component.html',
  styleUrl: './admin-tours.component.css'
})
export class AdminToursComponent {

}
