import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotels } from '../list-hotels/list-hotels.component';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.scss']
})
export class ViewHotelComponent implements OnInit {

  hotelId: number = 0;
  viewHotel: Hotels = new Hotels;
  constructor(private hotelService: HotelService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.hotelId = data['id'] ;
      console.log(data);
    })

    this.hotelService.viewHotel(this.hotelId).subscribe(data => {
      this.viewHotel = data as Hotels;
    })
  }

}
