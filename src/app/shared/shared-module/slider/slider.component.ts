import { Component, OnInit} from '@angular/core';
import { PrendasService } from 'src/app/services/prendas.service';
import { Prendas } from 'src/Models/Prendas';
import { CalculadoraCuotasService } from 'src/app/services/calculadora-cuotas.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css', './card-slider.component.css']
})
export class SliderComponent implements OnInit{
  prendasDestacadas: Prendas[] = [];
  cuotasPorPrenda: { [id: number]: number } = {};
  cantidadCuotas: number = 6;

  constructor(private prendasS: PrendasService,
    private calcCS: CalculadoraCuotasService) { }

  ngOnInit(): void {
    this.cargarPrendasDestacadas();
    this.calcularCuotasPorPrenda();
  }

  cargarPrendasDestacadas():void{
    this.prendasDestacadas = this.prendasS.obtenerPrendasDestacadas();
  }


 calcularCuotasPorPrenda(): void {
  this.prendasDestacadas.forEach((prenda) => {
    const precioCuota = this.calcCS.calcularPrecioCuota(prenda.precio, this.cantidadCuotas);
    this.cuotasPorPrenda[prenda.id] = precioCuota;
  });
}

  carouselOptions = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2450,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
        
      },
      {
        breakpoint: 518,
        settings: {
          slidesToShow: 1,
        }
        
      }

    ]
  };

  slickInit(e:any) {
    console.log('slick initialized');
  }
}
