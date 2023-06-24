import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CardComponent } from './Card/card/card.component';
import { RouterModule } from '@angular/router';
import { CartListComponent } from './Cart/cart-list/cart-list.component';
import { CartService } from 'src/app/services/cart.service';


@NgModule({
  declarations: [
    SliderComponent,
    CardComponent,
    CartListComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    SlickCarouselModule,
    RouterModule
  ],
  providers:[CartService],
  exports:[
    SliderComponent,
    CardComponent,
    CartListComponent
  ]
})
export class SharedModule { }
