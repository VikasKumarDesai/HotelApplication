import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHotelsComponent } from './hotels/list-hotels/list-hotels.component';
import { ViewHotelComponent } from './hotels/view-hotel/view-hotel.component';

const routes: Routes = [
  {path: "",  component: ListHotelsComponent, pathMatch: "full"},
  {path: "view/:id",  component: ViewHotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
