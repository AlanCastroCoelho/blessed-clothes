import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prendas } from 'src/Models/Prendas';
import { PrendasService } from 'src/app/services/prendas.service';
import { ViewportScroller } from '@angular/common';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService} from 'src/app/services/cart.service';
import { PrecioPorProducto, Product } from 'src/app/Interfaces/products';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  prendaId?: number;
  prenda?: Prendas;
  talleSeleccionado: boolean = false;
  selectedImageIndex: number = 0;
  preciosPorProducto: PrecioPorProducto[] = [];

  @ViewChild('productImageContainer') productImageContainer?: ElementRef;

  count = 1;

  decrementCount() {
    if (this.count > 1) {
      this.count--;
      this.productForm.patchValue({
        cantidad: this.count
      });
    }
  }

  incrementCount() {
    this.count++;
    this.productForm.patchValue({
      cantidad: this.count
    });
  }

  productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private prendasS: PrendasService,
    private viewportScroller: ViewportScroller,
    private cartService: CartService
  ) {
    this.productForm = new FormGroup({
      cantidad: new FormControl(this.count),
      talle: new FormControl('', Validators.required),
      nombre: new FormControl(this.prenda?.nombre),
      id: new FormControl(this.prendaId),
      imgUrl: new FormControl(this.prenda?.imgUrl[0]),
      precio: new FormControl(this.prenda?.precio)
    });
  }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      const tipoPrenda = params['tipo'];
      this.prendaId = parseInt(params['id'], 10);
      this.cargarPrenda();
  
    });
  }

  async cargarPrenda(): Promise<void> {
    if (this.prendaId !== undefined) {
      this.prenda = this.prendasS.obtenerPrendaPorId(this.prendaId);
      const firstImageUrl = this.prenda?.imgUrl[0];

      this.productForm.patchValue({
        id: this.prendaId,
        tipo: this.prenda?.tipo,
        imgUrl: firstImageUrl,
        nombre: this.prenda?.nombre
      });
  
      await this.asignarPrecio();
      this.preciosPorProducto = this.cartService.getPreciosPorProducto();
    }
  }

  async asignarPrecio(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.productForm.get('precio')?.setValue(this.prenda?.precio);
        resolve();
      }, 0);
    });
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  carouselConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
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

    this.cartService.addPrenda(product);
  } else {
    this.talleSeleccionado = false;
    this.productForm.controls['talle'].markAsTouched();}
}
}
