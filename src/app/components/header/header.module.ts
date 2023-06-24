import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AddBarComponent } from './add-bar/add-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    AddBarComponent,
    NavBarComponent,
    SubmenuComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
