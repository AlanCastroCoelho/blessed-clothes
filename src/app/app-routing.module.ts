import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProductTableComponent } from './components/shop/product-table/product-table.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { StoreComponent } from './components/stores/store/store.component';
import { PreguntasFrecuentesComponent } from './components/ayuda/preguntas-frecuentes/preguntas-frecuentes.component';
import { PoliticaDeCambiosComponent } from './components/ayuda/politica-de-cambios/politica-de-cambios.component';
import { CuidadoDePrendasComponent } from './components/ayuda/cuidado-de-prendas/cuidado-de-prendas.component';
import { TrabajaConNosotrosComponent } from './components/ayuda/trabaja-con-nosotros/trabaja-con-nosotros.component';



const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'shop',component: ProductTableComponent},
  { path: 'prenda/:tipo/:id', component: SingleProductComponent },
  { path: 'store/:nombre', component: StoreComponent },
  {path: 'ayuda/preguntas-frecuentes', component: PreguntasFrecuentesComponent},
  {path: 'ayuda/politica-de-cambios', component: PoliticaDeCambiosComponent},
  {path: 'ayuda/cuidado-de-prendas', component:CuidadoDePrendasComponent},
  {path: 'ayuda/recursos-humanos', component: TrabajaConNosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
