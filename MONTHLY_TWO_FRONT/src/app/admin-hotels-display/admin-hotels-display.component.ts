import { Component, OnInit } from '@angular/core';
import { HotelInterface } from '../../Models/hotelModel';
import { CommonModule } from '@angular/common';
import { HotelsService } from '../../Services/hotels.service';

@Component({
  selector: 'app-admin-hotels-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-hotels-display.component.html',
  styleUrl: './admin-hotels-display.component.css'
})
export class AdminHotelsDisplayComponent implements OnInit {
  hotels: HotelInterface[] = []
  message!:string


  constructor(private hotelsService: HotelsService) { }
  ngOnInit(): void {
    this.hotelsService.getHotels().subscribe(res => {
      console.log(res);
      this.hotels=res
    });
  }

  


  deleteHotel(hotel: HotelInterface): void {
    if (hotel.id) {
      this.hotelsService.deleteHotel(hotel.id).subscribe(
        res => {
          this.message = res.message;
          this.hotels = this.hotels.filter(t => t.id !== hotel.id);
        },
        error => {
          console.error('Error deleting tour:', error);
        }
      );
    } else {
      console.error('Hotel ID is undefined or null');
    }
  }
}
