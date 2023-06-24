import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraCuotasService {
  calcularPrecioCuota(precioTotal: number, cuotasSeleccionadas: number): number {
    const cuotasSinInteres = 6;
    const recargoCuotasInteresMedio = 0.15;
    const recargoCuotasInteresAlto = 0.25;

    let precioCuota: number;

    if (cuotasSeleccionadas <= cuotasSinInteres) {
      precioCuota = precioTotal / cuotasSeleccionadas;
    } else if (cuotasSeleccionadas <= 9) {
      const precioConRecargo = precioTotal * (1 + recargoCuotasInteresMedio);
      precioCuota = precioConRecargo / cuotasSeleccionadas;
    } else {
      const precioConRecargo = precioTotal * (1 + recargoCuotasInteresAlto);
      precioCuota = precioConRecargo / cuotasSeleccionadas;
    }

    return Number(precioCuota.toFixed(2));
  }
}