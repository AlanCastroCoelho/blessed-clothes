export interface Product {
    id: number;
    tipo: string;
    nombre: string;
    imgUrl: string;
    talle: string;
    precio: number;
    cantidad: number;
  }
  
  
  export interface PrecioPorProducto {
    id: number;
    precioPorCantidad: number;
  }