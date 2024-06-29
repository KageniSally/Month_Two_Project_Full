import { Component } from '@angular/core';
import { AdminHotelsAddComponent } from '../admin-hotels-add/admin-hotels-add.component';
import { AdminHotelsDisplayComponent } from '../admin-hotels-display/admin-hotels-display.component';

import { AdminNavBarComponent } from '../admin-nav-bar/admin-nav-bar.component';

@Component({
  selector: 'app-admin-hotels',
  standalone: true,
  imports: [AdminHotelsAddComponent,AdminHotelsDisplayComponent,AdminNavBarComponent],
  templateUrl: './admin-hotels.component.html',
  styleUrl: './admin-hotels.component.css'
})
export class AdminHotelsComponent {

}
