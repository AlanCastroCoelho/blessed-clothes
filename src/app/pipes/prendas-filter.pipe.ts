import { Pipe, PipeTransform } from '@angular/core';
import { Prendas } from 'src/Models/Prendas';

@Pipe({
    name: 'prendasFilter'
  })
  export class PrendasFilterPipe implements PipeTransform {
    transform(prendas: Prendas[], filtrosTalle: { [talle: string]: boolean }, filtrosTipoPrenda: { [tipo: string]: boolean }, filtrosGenero: { [genero: string]: boolean }): Prendas[] {
      return prendas.filter((prenda) => {
        const cumpleFiltroTalle =
          Object.values(filtrosTalle).every((filtro) => !filtro) ||
          Object.entries(filtrosTalle).some(([talle, filtro]) => filtro && prenda.talles.includes(talle));
        const cumpleFiltroTipoPrenda =
          Object.values(filtrosTipoPrenda).every((filtro) => !filtro) ||
          Object.entries(filtrosTipoPrenda).some(([tipo, filtro]) => filtro && prenda.tipo === tipo);
        const cumpleFiltroGenero =
          Object.values(filtrosGenero).every((filtro) => !filtro) ||
          Object.entries(filtrosGenero).some(([genero, filtro]) => filtro && prenda.genero === genero);
        return cumpleFiltroTalle && cumpleFiltroTipoPrenda && cumpleFiltroGenero;
      });
    }
  }
