import { Component, OnInit } from '@angular/core';
import { Prendas } from 'src/Models/Prendas';
import { CalculadoraCuotasService } from 'src/app/services/calculadora-cuotas.service';
import { PrendasService } from 'src/app/services/prendas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css','./card-product.component.css']
})
export class ProductTableComponent implements OnInit{

  prendas: Prendas[] = [];
  tallas: string[] = ['S', 'M', 'L', 'XL'];
  tiposPrenda: string[] = ['Buzo', 'Remera', 'Chaqueta','Pantalon'];
  generos: string[] = ['Hombre', 'Mujer'];
  filtrosTalle: { [talle: string]: boolean } = {};
  filtrosTipoPrenda: { [tipo: string]: boolean } = {};
  filtrosGenero: { [genero: string]: boolean } = {};
  articulosFiltrados: Prendas[] = [];


  cuotasPorPrenda: { [id: number]: number } = {};
  cantidadCuotas: number = 6;

  constructor(private prendasService: PrendasService,
    private calcCS: CalculadoraCuotasService,
    private route: ActivatedRoute,
     private router: Router) {}

     ngOnInit(): void {
      this.cargarPrendas();
      this.calcularCuotasPorPrenda();
    
      this.route.queryParams.subscribe(params => {
        const tipoPrenda = params['tipo'];
        if (tipoPrenda) {
          // Realizar el filtrado de acuerdo al tipo de prenda y otros filtros si es necesario
          this.filtrosTipoPrenda[tipoPrenda] = true;
          this.filtrarArticulos();
        }
      });
    }

  cargarPrendas(): void {
    this.prendas = this.prendasService.obtenerLista();
    this.inicializarFiltros();
    this.filtrarArticulos();
  }

  inicializarFiltros(): void {
    this.tallas.forEach((talle) => (this.filtrosTalle[talle] = false));
    this.tiposPrenda.forEach((tipo) => (this.filtrosTipoPrenda[tipo] = false));
    this.generos.forEach((genero) => (this.filtrosGenero[genero] = false));
  }

  aplicarFiltros(): void {
    this.filtrarArticulos();
  }

  filtrarArticulos(): void {
    this.articulosFiltrados = this.prendas.filter((prenda) => {
      const cumpleFiltroTalle =
        Object.values(this.filtrosTalle).every((filtro) => !filtro) ||
        Object.entries(this.filtrosTalle).some(([talle, filtro]) => filtro && prenda.talles.includes(talle));
      const cumpleFiltroTipoPrenda =
        Object.values(this.filtrosTipoPrenda).every((filtro) => !filtro) ||
        Object.entries(this.filtrosTipoPrenda).some(([tipo, filtro]) => filtro && prenda.tipo === tipo);
      const cumpleFiltroGenero =
        Object.values(this.filtrosGenero).every((filtro) => !filtro) ||
        Object.entries(this.filtrosGenero).some(([genero, filtro]) => filtro && prenda.genero === genero);
      return cumpleFiltroTalle && cumpleFiltroTipoPrenda && cumpleFiltroGenero;
    });
  }

  calcularCuotasPorPrenda(): void {
    this.prendas.forEach((prenda) => {
      const precioCuota = this.calcCS.calcularPrecioCuota(prenda.precio, this.cantidadCuotas);
      this.cuotasPorPrenda[prenda.id] = precioCuota;
    });
  }
}