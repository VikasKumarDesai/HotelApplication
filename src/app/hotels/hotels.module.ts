import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { ViewHotelComponent } from './view-hotel/view-hotel.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HotelFilterPipe } from './hotel-filter.pipe';


@NgModule({
  declarations: [
    ListHotelsComponent,
    ViewHotelComponent,
    HotelFilterPipe
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class HotelsModule { }
