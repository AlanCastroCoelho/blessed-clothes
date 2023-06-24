import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleProductComponent } from './single-product.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SingleProductComponent],
  imports: [
    CommonModule,
    SlickCarouselModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    SingleProductComponent
  ]
})
export class SingleProductModule { }
