import { Component, Input, OnInit } from '@angular/core';
import { CityData, Store } from 'src/Models/Store';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
  nombreCiudad?: string;
  ciudadesFiltradas: CityData[] = [];

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nombre = params.get('nombre');
      this.nombreCiudad = nombre !== null ? nombre : undefined;
      this.cargarCiudadesFiltradas();
    });
  }
  
  cargarCiudadesFiltradas(): void {
    if (this.nombreCiudad !== undefined) {
      this.ciudadesFiltradas = this.storeService.obtenerPorCiudad(this.nombreCiudad);
    } else {
      this.ciudadesFiltradas = [];
    }
    console.log(this.ciudadesFiltradas);
  }
}