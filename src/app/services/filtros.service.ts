import { Injectable } from '@angular/core';
import { Prendas } from 'src/Models/Prendas';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

    public filtrarPrendas(prendas: Prendas[], filtros: any): Prendas[] {
      return prendas.filter(prenda =>
        this.cumpleFiltroTalle(prenda, filtros) &&
        this.cumpleFiltroTipoPrenda(prenda, filtros) &&
        this.cumpleFiltroGenero(prenda, filtros)
      );
    }
  
    private cumpleFiltroTalle(prenda: Prendas, filtros: any): boolean {
      /*Si todos los filtros son false*/
      return Object.values(filtros.filtrosTalle).every(filtro => !filtro) ||
         /*Si el filtro es true y prenda incluye dicho talle*/
        Object.entries(filtros.filtrosTalle).some(([talle, filtro]) => filtro && prenda.talles.includes(talle));
    }
  
    private cumpleFiltroTipoPrenda(prenda: Prendas, filtros: any): boolean {
      return Object.values(filtros.filtrosTipoPrenda).every(filtro => !filtro) ||
        Object.entries(filtros.filtrosTipoPrenda).some(([tipo, filtro]) => filtro && prenda.tipo === tipo);
    }
  
    private cumpleFiltroGenero(prenda: Prendas, filtros: any): boolean {
      return Object.values(filtros.filtrosGenero).every(filtro => !filtro) ||
        Object.entries(filtros.filtrosGenero).some(([genero, filtro]) => filtro && prenda.genero === genero);
    }
  }
  
  
  
  
  
  
