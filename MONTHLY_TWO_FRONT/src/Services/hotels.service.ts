import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HotelInterface, hotelResponse } from '../Models/hotelModel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private BaseURL: string = 'http://localhost:5000/hotels';

  constructor(private http: HttpClient) { }

  getHotels(): Observable<HotelInterface[]> {
    const token = localStorage.getItem('token') as string

    return this.http.get<HotelInterface[]>(this.BaseURL,{
      headers:new HttpHeaders({token:token})
    });
  }


  addHotel(newHotel:HotelInterface){
    const token = localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('token', token);
    return this.http.post<hotelResponse>(this.BaseURL, newHotel, { headers });
  }


  deleteHotel(hotelId:string){
    const token=localStorage.getItem('token') as string
    const headers=new HttpHeaders().set('token',token)

    return this.http.delete<hotelResponse>(`${this.BaseURL}/${hotelId}`,{headers})
  }

  updateHotel(hotelId: string, updatedHotel: HotelInterface): Observable<hotelResponse> {
    const token = localStorage.getItem('token') as string;
    return this.http.put<hotelResponse>(`${this.BaseURL}/${hotelId}`, updatedHotel, {
      headers: new HttpHeaders({ token: token })
    });
  }
}
