import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from '../models/contract.model';
import { Hotel } from '../models/hotel.model';
import { ContractInterface } from '../pages/add-contract/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private apiUrl = 'http://localhost:8080/api/contracts'; // backend URL
  private apiUrlHotel = 'http://localhost:8080/api/hotels'; // backend URL

  constructor(private http: HttpClient) { }

  getContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.apiUrl);
  }
  
  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrlHotel}`);
  }

  getContractById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${this.apiUrl}/${id}`);
  }

  createContract(contract: ContractInterface): Observable<ContractInterface> {
    return this.http.post<ContractInterface>(`${this.apiUrl}`, contract);
  }

  deleteContract(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getHotelById(id: number): Observable<{name: string}> {
    return this.http.get<any>(`${this.apiUrl}/hotels/${id}`);
  }
}
// @Injectable({
//   providedIn: 'root'
// })
// export class ContractService {
//   private contractUrl = 'http://localhost:8080/contracts/';
//   private hotelUrl = 'http://localhost:8080/hotel/';

//   constructor(private http: HttpClient) { }

//   createContract(contract: any): Observable<any> {
//     return this.http.post(this.contractUrl, contract);
//   }

// }