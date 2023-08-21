import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Prendas } from 'src/Models/Prendas';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService} from 'src/app/services/cart.service';
import { Product } from 'src/app/Interfaces/products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
  @Input() prenda: Prendas | undefined;
  @Input() cantidadC?: number;
  @Input() cPorPrenda?: number;
  @Input() radioGroupName?: string;

  talleSeleccionado: boolean = false;
  showtalle: boolean = false;
  count = 1;
  productForm!: FormGroup;

  constructor(private cartS: CartService) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      cantidad: new FormControl(this.count),
      talle: new FormControl('', Validators.required),
      nombre: new FormControl(this.prenda?.nombre),
      id: new FormControl(this.prenda?.id),
      imgUrl: new FormControl(this.prenda?.imgUrl[0]),
      precio: new FormControl(this.prenda?.precio)
    });
  }

  seleccionarTalle(talle: string) {
    this.productForm.patchValue({
      talle: talle
    });
  }

showTalle(){
this.showtalle = !this.showtalle;
}

  agregarAlCarrito() {
    if (this.productForm.controls['talle'].valid) {
    const { id, tipo, nombre, imgUrl, talle, precio, cantidad} = this.productForm.value;

    const product: Product = {
      id,
      tipo,
      nombre,
      imgUrl,
      talle,
      precio,
      cantidad,
    };

    this.cartS.addPrenda(product);
  } else {
    this.talleSeleccionado = false;
    this.productForm.controls['talle'].markAsTouched();}
}
}