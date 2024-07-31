import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:8080/api/hotels'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  createHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl, hotel);
  }

  // getAllHotels(): Observable<Hotel[]> {
  //   return this.http.get<Hotel[]>(this.apiUrl);
  // }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/${id}`);
  }

  getHotelByName(name: string): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/name/${name}`);
  }

  // createHotel(hotel: Hotel): Observable<Hotel> {
  //   return this.http.post<Hotel>(this.apiUrl, hotel);
  // }

  deleteHotel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
