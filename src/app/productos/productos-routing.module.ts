import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosPage } from './productos.page';
import { AgregarProductosPage } from './agregar-productos/agregar-productos.page';
import { EditarProductosPage } from './editar-productos/editar-productos.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosPage
  },
  {
    path: 'agregar',
    component: AgregarProductosPage
  },
  {
    path: ':productoID',
    loadChildren: () => import('./detalle-productos/detalle-productos.module').then( m => m.DetalleProductosPageModule)
  },
  {
    path: ':productoID/editar',
    component: EditarProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosPageRoutingModule {}
