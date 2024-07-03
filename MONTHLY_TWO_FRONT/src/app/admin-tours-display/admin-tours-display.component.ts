import { Component, OnDestroy, OnInit } from '@angular/core';
import { toursInterface } from '../../Models/tourModel';
import { CommonModule } from '@angular/common';
import { ToursService } from '../../Services/tours.service';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { TourActions } from '../State/Actions/tour.action';
import { toursArraySelector } from '../State/Selectors/tour.selector';

@Component({
  selector: 'app-admin-tours-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-tours-display.component.html',
  styleUrl: './admin-tours-display.component.css'
})
export class AdminToursDisplayComponent implements OnInit {

  tours: toursInterface[] = []
  message!: string

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.toursService.getTours().subscribe(
    //   (res: toursInterface[]) => {
    //     // console.log(res); 
    //     this.tours = res;

    //     // Convert hotels from JSON string to array of strings
    //     this.tours.forEach(tour => {
    //       if (typeof tour.hotels === 'string') {
    //         tour.hotels = JSON.parse(tour.hotels);
    //       }
    //       // console.log(tour.hotels); 
    //     });
    //   },
    //   (error) => {
    //     console.error('Error fetching tours:', error);
    //   }
    // );

    this.store.dispatch(TourActions.getTours())
    this.store.select(toursArraySelector).subscribe(res=>{
      this.tours=res
    })
  }


  deleteTour(tour: toursInterface): void {
    if (tour.id) {
      // this.toursService.deleteTour(tour.id).subscribe(
      //   res => {
      //     this.message = res.message;
      //     // Remove the deleted tour from the list
      //     this.tours = this.tours.filter(t => t.id !== tour.id);
      //   },
      //   error => {
      //     console.error('Error deleting tour:', error);
      //   }
      // );
    } else {
      console.error('Tour ID is undefined or null');
    }
  }
}
