import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/Models/Store';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit{
  stores: Store[] = [];
  @Input() menuType?: string;
  @Output() emptyStringEmitted = new EventEmitter<string>();

  constructor(private storeS: StoreService){}
ngOnInit(): void {
  this.cargarStores();
}

cargarStores(): void {
  const stores = this.storeS.obtenerPorProvincia('Buenos Aires');
  if (stores && stores.length > 0) {
    this.stores = stores;
  } else {
    console.error('No se encontraron tiendas en Buenos Aires');
  }
}

toggleSubMenu():void {
  this.emptyStringEmitted.emit('');
}

}
