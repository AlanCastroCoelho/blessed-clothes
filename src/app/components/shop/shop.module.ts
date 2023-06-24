import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { PrendasService } from 'src/app/services/prendas.service';
import { FormsModule } from '@angular/forms';
import { PrendasFilterPipe } from 'src/app/pipes/prendas-filter.pipe';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    ProductTableComponent,
    PrendasFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ],
  providers:[PrendasService],
  exports:[]
})
export class ShopModule { }
