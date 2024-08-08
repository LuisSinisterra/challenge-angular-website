import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ProductsComponent
  ],
  
  imports: [
    HttpClientModule,
    CommonModule
  ],

  exports: [ContainerComponent],
})
export class ContainerModule { }
