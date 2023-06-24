import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule
  ],
  exports:[ContactoComponent]
})
export class FooterModule { }
