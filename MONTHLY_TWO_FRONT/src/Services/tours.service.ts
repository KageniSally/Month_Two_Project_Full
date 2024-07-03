import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TourResponse, toursInterface } from '../Models/tourModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  private BaseURL: string = 'http://localhost:5000/tours'
  constructor(private http: HttpClient) { }

  getTours(): Observable<toursInterface[]> {
    return this.http.get<toursInterface[]>(this.BaseURL)
  }


  addTour(tour: toursInterface): Observable<TourResponse> {
    const token = localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('token', token);
    return this.http.post<TourResponse>(this.BaseURL, tour, { headers });
  }

  deleteTour(tourId: string): Observable<TourResponse> {
    const token = localStorage.getItem('token') as string
    const headers = new HttpHeaders().set('token', token)
    return this.http.delete<TourResponse>(`${this.BaseURL}/${tourId}`, { headers });
  }

  updateTour(hotelId: string, updatedTour: toursInterface): Observable<TourResponse> {
    const token = localStorage.getItem('token') as string;
    return this.http.put<TourResponse>(`${this.BaseURL}/${hotelId}`, updatedTour, {
      headers: new HttpHeaders({ token: token })
    });
  }
}
