import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { PoliticaDeCambiosComponent } from './politica-de-cambios/politica-de-cambios.component';
import { CuidadoDePrendasComponent } from './cuidado-de-prendas/cuidado-de-prendas.component';
import { TrabajaConNosotrosComponent } from './trabaja-con-nosotros/trabaja-con-nosotros.component';



@NgModule({
  declarations: [
    PreguntasFrecuentesComponent,
    PoliticaDeCambiosComponent,
    CuidadoDePrendasComponent,
    TrabajaConNosotrosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PreguntasFrecuentesComponent
  ]
})
export class AyudaModule { }
