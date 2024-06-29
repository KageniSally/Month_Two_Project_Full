import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { booking } from '../Models/bookingModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private readonly BaseURL:string="http://localhost:5000/bookings"

  constructor(private http:HttpClient) { }

  getBookings(): Observable<booking[]> {
    const token = localStorage.getItem('token') as string

    return this.http.get<booking[]>(this.BaseURL,{
      headers:new HttpHeaders({token:token})
    });
  }


  getBooking(): Observable<booking[]> {
    const userId=localStorage.getItem('userId') as string;
    const token = localStorage.getItem('token') as string

    return this.http.get<booking[]>(this.BaseURL+`/${userId}`,{
      headers:new HttpHeaders({token:token})
    });
  }

  getUserId(): string {
    const user_Id=localStorage.getItem('userId') as string;
    return user_Id
  }
}
