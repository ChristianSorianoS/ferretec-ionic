import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss']
})
export class ProductosPage implements OnInit {

  public productos: any = []

  constructor(public Servicio: ProductosService ) { }

  ngOnInit() {
    this.productos = this.Servicio.getProductos()

  }

  ionViewWillEnter(){
    this.productos = this.Servicio.getProductos()
  }
}
