import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HotelInterface } from '../../Models/hotelModel';
import { FooterUserComponent } from '../footer-user/footer-user.component';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { HotelsService } from '../../Services/hotels.service';

@Component({
  selector: 'app-user-hotels',
  standalone: true,
  imports: [CommonModule, FooterUserComponent, UserNavbarComponent],
  templateUrl: './user-hotels.component.html',
  styleUrl: './user-hotels.component.css'
})
export class UserHotelsComponent implements OnInit {
  hotels: HotelInterface[] = []
  constructor(private hotelsService: HotelsService) { }

  ngOnInit(): void {
    this.hotelsService.getHotels().subscribe(res => {
      // Handle the response
      console.log(res);
      this.hotels = res

    })
  }
}
