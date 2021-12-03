import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HotelService {
  baseUrl: string = 'https://localhost:7163/api/';
  constructor(private http: HttpClient) { }

  listHotels(){
    return this.http.get(this.baseUrl + 'hotel')
  }

  viewHotel(hotelId:number){
    return this.http.get(this.baseUrl + 'hotel/' + hotelId)
  }

}
