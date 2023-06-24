import { Injectable } from '@angular/core';
import { CityData, Store } from 'src/Models/Store';
import { STORE_DATA } from './store-data';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private stores: Store[] = STORE_DATA;

  obtenerPorProvincia(provincia: string): Store[] {
    return this.stores.filter(store => store.provincia === provincia);
  }
  
  obtenerPorCiudad(nombreCiudad: string): CityData[] {
    const ciudadesFiltradas: CityData[] = [];
    this.stores.forEach(store => {
      console.log('Iterating store:', store); // Agrega este console.log para verificar si el bucle se ejecuta correctamente
      const ciudad = store.ciudad.find(c => c.cNombre === nombreCiudad);
      if (ciudad) {
        ciudad.localidad.forEach(localidad => {
          ciudadesFiltradas.push({
            cNombre: ciudad.cNombre,
            localidad: [{
              lNombre: localidad.lNombre,
              sucursales: localidad.sucursales
            }]
          });
        });
      }
    });
  
    return ciudadesFiltradas;
  }
  

  obtenerPorLocalidad(localidad: string): Store[] {
    return this.stores.filter((store) => {
      return store.ciudad.some((ciudadObj) => {
        return ciudadObj.localidad.some((localidadObj) => {
          return localidadObj.lNombre === localidad;
        });
      });
    });
  } 
}