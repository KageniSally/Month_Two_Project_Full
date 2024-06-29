import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';


@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent {
constructor(public auth:AuthServiceService){

}


}
