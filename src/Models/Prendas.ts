export interface Prendas {
  id: number;
  tipo: string;
  nombre: string;
  descripcion: string;
  genero:string;
  imgUrl:string[];
  cuidados: string;
  talles: Talle[];
  precio: number;
  stock:string;
  destacada: boolean;
}

export type Talle = string;
