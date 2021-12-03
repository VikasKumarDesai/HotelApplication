import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelService } from 'src/app/services/hotel.service';
import { Sort } from '@angular/material/sort';

export class Address {
  public town: string = '';
  public region: string = '';
  public postcode: string = '';
}

export class Hotels {
  public hotelId: number = 0
  hotelName: string = '';
  address: Address = new Address;
  phoneNumber: string = '';
  description: string = '';
  rating: number = 0;
}

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.scss']
})
export class ListHotelsComponent implements OnInit {
  searchText: string = '';
  selectedRating: string = '0';
  listHotels: Array<Hotels> = [];
  originalList: Array<Hotels> = [];
  selectedBrand: number = 0;

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.listHotels().subscribe(data => {
      this.listHotels = data as Array<Hotels>;
    });
  }

  public valueSelected() {
    this.listHotels = this.listHotels.filter(item => item.rating === this.selectedBrand);
  }
}

