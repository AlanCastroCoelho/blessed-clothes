import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface PrecioPorProducto {
  id: number;
  precioPorCantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private prendas: Product[] = [];
  private totalItems: number = 0;
  private readonly storageKey = 'cartItems';
  totalItemsChanged = new Subject<void>();
  preciosPorProducto: PrecioPorProducto[] = [];
  precioTotalCarrito: number = 0;

  private carritoActualizado = new Subject<void>();

  carritoActualizado$ = this.carritoActualizado.asObservable();

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
  }

  addPrenda(prenda: Product) {
    this.prendas.push(prenda);
    this.totalItems += prenda.cantidad;
    this.saveCartItems();
    this.totalItemsChanged.next();
    this.calcularPreciosPorProducto();
    this.calcularPrecioTotalCarrito();
    this.carritoActualizado.next(); 
  }

  removePrenda(index: number) {
    const prenda = this.prendas[index];
    this.prendas.splice(index, 1);
    this.totalItems -= prenda.cantidad;
    this.saveCartItems();
    this.totalItemsChanged.next();
    this.calcularPreciosPorProducto();
    this.calcularPrecioTotalCarrito();
    this.carritoActualizado.next(); // Agregamos este evento para notificar los cambios en el carrito
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
  public calcularPrecioTotalCarrito(): Promise<number> {
    return new Promise((resolve) => {
      const precioTotal = this.prendas.reduce((total, prenda) => total + (prenda.precio * prenda.cantidad), 0);
      resolve(precioTotal);
    });
  } 
}

export interface Product {
  id: number;
  tipo: string;
  nombre: string;
  imgUrl: string;
  talle: string;
  precio: number;
  cantidad: number;
}