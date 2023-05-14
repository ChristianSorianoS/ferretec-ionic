import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProductosPageRoutingModule } from './detalle-productos-routing.module';

import { DetalleProductosPage } from './detalle-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProductosPageRoutingModule
  ],
  declarations: [DetalleProductosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetalleProductosPageModule {}
