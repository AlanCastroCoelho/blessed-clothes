import { Store } from "src/Models/Store";

export const STORE_DATA: Store[] = [
  {
    id: 1,
    provincia: 'Buenos Aires',
    ciudad: [
      {
        cNombre: 'Capital',
        localidad: [
          {
            lNombre: 'Palermo Soho',
            sucursales: [
              {
                direccion: 'El Salvador 1234 - Palermo Soho',
                horario: 'Lunes a Viernes de 9hs a 18hs',
                telefono: ['+54 221 425-0000'],
              },
            ],
          },
        ],
      },
      {
        cNombre: 'La Plata',
        localidad: [
          {
            lNombre: 'Centro',
            sucursales: [
              {
                direccion: 'Calle 50 N° 725',
                horario: 'Lunes a Viernes de 9hs a 18hs',
                telefono: ['+54 221 425-0000'],
              },
            ],
          },
        ],
      },
      {
        cNombre: 'Mar del Plata',
        localidad: [
          {
            lNombre: 'Güemes',
            sucursales: [
              {
                direccion: 'Calle Güemes N° 1234',
                horario: 'Lunes a Viernes de 9hs a 18hs',
                telefono: ['+54 223 425-0000'],
              },
            ],
          },
        ],
      },
      {
        cNombre: 'Quilmes',
        localidad: [
          {
            lNombre: 'Centro',
            sucursales: [
              {
                direccion: 'El Salvador 1234 - Rivadavia',
                horario: 'Lunes a Viernes de 9hs a 18hs',
                telefono: ['+54 221 425-0000'],
              },
            ],
          },
        ],
      },
      {
        cNombre: 'Avellaneda',
        localidad: [
          {
            lNombre: 'Centro',
            sucursales: [
              {
                direccion: 'El Salvador 1234 - Palermo Soho',
                horario: 'Lunes a Viernes de 9hs a 18hs',
                telefono: ['+54 221 425-0000'],
              },
            ],
          },
          {
            lNombre: 'Sarandi',
            sucursales: [
              {
                direccion: 'El Salvador 1234 - Palermo Soho',
                horario: 'Lunes a Viernes de 9hs a 18hs',
                telefono: ['+54 221 425-0000'],
              },
            ],
          },
        ],
      },
    ],
  },
];