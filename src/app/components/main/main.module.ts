import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacadosComponent } from './destacados/destacados.component';
import { RedesComponent } from './redes/redes.component';
import { SharedModule } from '../../shared/shared-module/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MainComponent } from './main.component';
import { HeroSectionComponent } from './hero-section/hero-section/hero-section.component';
import { PrendasComponent } from './prendas/prendas.component';
import { InformativeBannerComponent } from './informative-banner/informative-banner.component';
import { RouterModule } from '@angular/router';
import { NewsletterComponent } from './newsletter/newsletter.component';


@NgModule({
  declarations: [ 
    HeroSectionComponent,
    InformativeBannerComponent,
    DestacadosComponent,
    PrendasComponent,
    RedesComponent,
    MainComponent,
    NewsletterComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
   SlickCarouselModule,
   RouterModule
  ],
  exports:[
   MainComponent
  ]
})
export class MainModule { }
