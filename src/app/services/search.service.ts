import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:8080/api/search'; // Update with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  searchRooms(criteria: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, criteria);
  }
}
