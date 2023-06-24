import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { StoreService } from 'src/app/services/store.service';


@NgModule({
  declarations: [
    StoreComponent
  ],
  providers:[
    StoreService
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StoreComponent
  ]
})
export class StoresModule { }
