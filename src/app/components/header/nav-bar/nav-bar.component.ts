import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from 'src/Models/Store';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  totalItems = 0;
  showCart: boolean = false;
  isScrollDisabled: boolean = false;

  subMenuType?: string = '';

  mobileRes?: boolean;

  stores: Store[] = [];

  constructor(private cartS: CartService, private storeS: StoreService) {}

  ngOnInit() {
    this.updateTotalItems();
    this.cartS.carritoActualizado.subscribe(() => {
      this.updateTotalItems();
    });
    this.mobileRes = window.innerWidth < 768;
    if (this.mobileRes) {
      this.cargarStores();
    }
  }

  updateTotalItems() {
    this.totalItems = this.cartS.getTotalItems();
  }

  toggleCart() {
    if (
      (!this.showCart && this.subMenuType === 'stores') ||
      (!this.showCart && this.subMenuType === 'ayuda')
    ) {
      this.subMenuType = '';
    }

    this.showCart = !this.showCart;
    this.isScrollDisabled = this.showCart;

    if (this.isScrollDisabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  handleEmptyString(value: string): void {
    this.subMenuType = value;
  }

  submenuToggle(subMType: string): void {
    if (this.showCart) {
      this.showCart = false;
      this.isScrollDisabled = false;
      document.body.style.overflow = 'auto';
    }

    if (subMType === this.subMenuType) {
      this.subMenuType = '';
    } else {
      this.subMenuType = subMType;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.mobileRes = window.innerWidth < 768;
  }

  cargarStores(): void {
    const stores = this.storeS.obtenerPorProvincia('Buenos Aires');
    if (stores && stores.length > 0) {
      this.stores = stores;
    } else {
      console.error('No se encontraron tiendas en Buenos Aires');
    }
  }
}
