import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';
import { AgregarProductosPage } from './agregar-productos/agregar-productos.page';
import { EditarProductosPage } from './editar-productos/editar-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProductosPage, 
    AgregarProductosPage,
  EditarProductosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductosPageModule {}
