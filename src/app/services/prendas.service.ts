import { Injectable } from '@angular/core';
import { Prendas } from 'src/Models/Prendas';
import { PRENDAS_DATA } from './prendas-data';

@Injectable({
  providedIn: 'root'
})
export class PrendasService {
  private prendas: Prendas[] = PRENDAS_DATA;
  
obtenerLista(): Prendas[]{
return this.prendas;
}

  obtenerPrendasPorTipo(tipo: string): Prendas[] {
    return this.prendas.filter((prenda) => prenda.tipo === tipo);
  }

  obtenerPrendaPorId(id: number): Prendas | undefined {
    return this.prendas.find((prenda) => prenda.id === id);
  }

  obtenerPrendasDestacadas(): Prendas[] {
    return this.prendas.filter((prenda) => prenda.destacada === true);
  }
}
