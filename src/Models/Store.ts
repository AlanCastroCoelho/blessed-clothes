export interface Store {
    id: number;
    provincia: string;
    ciudad: {
      cNombre:string;
      localidad: {
        lNombre: string;
        sucursales: {
          direccion: string;
          horario: string;
          telefono: string[];
        }[];
      }[];
    }[];
  }

  export interface CityData {
    cNombre: string;
    localidad: {
      lNombre: string;
      sucursales: {
        direccion: string;
        horario: string;
        telefono: string[];
      }[];
    }[];
  }
