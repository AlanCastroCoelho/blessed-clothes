import { Component, OnInit } from '@angular/core';
import { Prendas } from 'src/Models/Prendas';
import { CalculadoraCuotasService } from 'src/app/services/calculadora-cuotas.service';
import { PrendasService } from 'src/app/services/prendas.service';
import { FiltrosService } from 'src/app/services/filtros.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css', './card-product.component.scss'],
})
export class ProductTableComponent implements OnInit {
  prendas: Prendas[] = [];

  tallas: string[] = ['S', 'M', 'L', 'XL'];
  tiposPrenda: string[] = ['Buzo', 'Remera', 'Chaqueta', 'Pantalon'];
  generos: string[] = ['Hombre', 'Mujer'];

  filtrosTalle: { [talle: string]: boolean } = {};
  filtrosTipoPrenda: { [tipo: string]: boolean } = {};
  filtrosGenero: { [genero: string]: boolean } = {};
  articulosFiltrados: Prendas[] = [];

  cuotasPorPrenda: { [id: number]: number } = {};
  cantidadCuotas: number = 6;

  constructor(
    private prendasService: PrendasService,
    private calcCS: CalculadoraCuotasService,
    private filtrosService: FiltrosService
  ) {}

  ngOnInit(): void {
    this.cargarPrendas();
    this.calcularCuotasPorPrenda();
  }

  cargarPrendas(): void {
    this.prendas = this.prendasService.obtenerLista();
    this.inicializarFiltros();
    this.filtrarArticulos();
  }

  inicializarFiltros(): void {
    this.inicializarFiltro(this.filtrosTalle, this.tallas);
    this.inicializarFiltro(this.filtrosTipoPrenda, this.tiposPrenda);
    this.inicializarFiltro(this.filtrosGenero, this.generos);
  }

  aplicarFiltros(): void {
    this.filtrarArticulos();
  }

  filtrarArticulos(): void {
    const filtros = {
      filtrosTalle: this.filtrosTalle,
      filtrosTipoPrenda: this.filtrosTipoPrenda,
      filtrosGenero: this.filtrosGenero,
    };
    this.articulosFiltrados = this.filtrosService.filtrarPrendas(
      this.prendas,
      filtros
    );
  }

  calcularCuotasPorPrenda(): void {
    this.prendas.forEach((prenda) => {
      const precioCuota = this.calcCS.calcularPrecioCuota(
        prenda.precio,
        this.cantidadCuotas
      );
      this.cuotasPorPrenda[prenda.id] = precioCuota;
    });
  }

  private inicializarFiltro(
    filtro: { [key: string]: boolean },
    opciones: string[]
  ): void {
    opciones.forEach((opcion) => (filtro[opcion] = false));
  }
}
