import { Pipe, PipeTransform } from '@angular/core';
import { Hotels } from './list-hotels/list-hotels.component';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  transform(hotels: Hotels[], searchText: string, fieldName: string, selectedRating : string, ratingFieldName: string) : Hotels[] {
    if(!hotels || (!searchText && (selectedRating=='0')) ){
      return hotels;
    }
    if(selectedRating=='0'){
    return hotels.filter(hotel => hotel.hotelName.toLowerCase().indexOf(searchText.toLowerCase()) !=-1);
    }
    if(!searchText){
      return hotels.filter(hotel => hotel.rating.toString() == selectedRating);       
    }

    return hotels.filter(hotel => hotel.hotelName.toLowerCase().indexOf(searchText.toLowerCase())!=-1 
    && hotel.rating.toString() == selectedRating );
  }

}
