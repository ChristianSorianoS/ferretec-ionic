import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleProductosPage } from './detalle-productos.page';
import { EditarProductosPage } from '../editar-productos/editar-productos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleProductosPageRoutingModule {}
