import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { MainModule } from './components/main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopModule } from './components/shop/shop.module';
import { SingleProductModule } from './components/single-product/single-product.module';
import { FooterModule } from './components/footer/footer.module';
import { StoresModule } from './components/stores/stores.module';
import { AyudaModule } from './components/ayuda/ayuda.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    MainModule,
    FooterModule,
ShopModule,
SingleProductModule,
StoresModule,
AyudaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
