import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Prendas } from 'src/Models/Prendas';
import { CartService, PrecioPorProducto, Product } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

export class CartListComponent implements OnInit {
  products: Product[] = [];
  precioTotalCarrito: number = 0;

  constructor(private cartS: CartService) {}
  
  async ngOnInit() {
    this.cartS.carritoActualizado$.subscribe(async () => {
      this.products = this.cartS.getPrendas();
      this.precioTotalCarrito = await this.cartS.calcularPrecioTotalCarrito();
    });
  
    this.products = this.cartS.getPrendas();
    this.precioTotalCarrito = await this.cartS.calcularPrecioTotalCarrito();
    
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