import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { PrecioPorProducto, Product } from '../Interfaces/products';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private prendas: Product[] = [];


  private readonly storageKey = 'cartItems';

  private totalItems: number = 0;

  preciosPorProducto: PrecioPorProducto[] = [];

  precioTotalCarrito: number = 0;
  carritoActualizado = new Subject<void>();


  constructor() {
    this.loadCartItems();
    this.updateTotalItems();
    this.calcularPreciosPorProducto();
    this.calcularPrecioTotalCarrito();
  }

  private saveCartItems() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.prendas));
  }

  private loadCartItems() {
    const savedItems = localStorage.getItem(this.storageKey);
    if (savedItems) {
      this.prendas = JSON.parse(savedItems);
      this.updateTotalItems();
      this.calcularPreciosPorProducto();
      this.calcularPrecioTotalCarrito();
    }
  }

  private updateTotalItems() {
    this.totalItems = this.prendas.reduce((total, prenda) => total + prenda.cantidad, 0);
    this.carritoActualizado.next();
  }

  addPrenda(prenda: Product) {
    this.prendas.push(prenda);
    this.totalItems += prenda.cantidad;
    this.saveCartItems();
    this.calcularPreciosPorProducto();
    this.calcularPrecioTotalCarrito();
    this.carritoActualizado.next(); 
  }

  removePrenda(index: number) {
    const prenda = this.prendas[index];
    this.prendas.splice(index, 1);
    this.totalItems -= prenda.cantidad;
    this.saveCartItems();
    this.calcularPreciosPorProducto();
    this.calcularPrecioTotalCarrito();
    this.carritoActualizado.next();
  }
  
  getPrendas(): Product[] {
    return this.prendas;
  }

  getTotalItems(): number {
    return this.totalItems;
  }

  getPreciosPorProducto(): PrecioPorProducto[] {
    return this.preciosPorProducto;
  }

  getPrecioTotalCarrito(): number {
    return this.precioTotalCarrito;
  }

  private calcularPreciosPorProducto() {
    const preciosPorProducto: PrecioPorProducto[] = [];

    this.prendas.forEach(prenda => {
      const precioPorCantidad = prenda.precio * prenda.cantidad;
      const index = preciosPorProducto.findIndex(item => item.id === prenda.id);

      if (index !== -1) {
        preciosPorProducto[index].precioPorCantidad += precioPorCantidad;
      } else {
        preciosPorProducto.push({ id: prenda.id, precioPorCantidad });
      }
    });

    this.preciosPorProducto = preciosPorProducto;
  }

private calcularPrecioTotalCarrito() {
      const precioTotal = this.prendas.reduce((total, prenda) => total + (prenda.precio * prenda.cantidad), 0);
      this.precioTotalCarrito = precioTotal;
  } 
}

