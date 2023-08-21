import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Prendas } from 'src/Models/Prendas';
import { Product } from 'src/app/Interfaces/products';
import { CalculadoraCuotasService } from 'src/app/services/calculadora-cuotas.service';
import { CartService} from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

export class CartListComponent implements OnInit {
  products: Product[] = [];
  precioTotalCarrito: number = 0;
   precioCuota?: number;
  constructor(private cartS: CartService,
    private calcCuotS: CalculadoraCuotasService) {}
  
 ngOnInit() {
  this.products = this.cartS.getPrendas();
  this.precioTotalCarrito = this.cartS.getPrecioTotalCarrito();
this.precioCuota = this.calcCuotS.calcularPrecioCuota(this.precioTotalCarrito, 6);

    this.cartS.carritoActualizado.subscribe(() => {
      this.products = this.cartS.getPrendas();
      this.precioTotalCarrito =  this.cartS. getPrecioTotalCarrito();
      this.precioCuota = this.calcCuotS.calcularPrecioCuota(this.precioTotalCarrito, 6);
    });
  }

  removeProduct(index: number) {
    this.cartS.removePrenda(index);
  }

  getPrecioPorCantidad(prenda: Product): number {
    return prenda.precio * prenda.cantidad;
  }

  @Output() hideCartList = new EventEmitter();

  hideCart() {
    this.hideCartList.emit();
  }
}