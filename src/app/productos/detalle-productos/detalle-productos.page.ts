import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {
  public datos: any = {}

  constructor(public Servicio: ProductosService, private activatedRoute: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( p => {
      //Se obtiene id validando que no sea nulo
      const productoId = p.get('productoID')?.toString()
      console.log('ID Actual',productoId)
      this.datos = this.Servicio.getProductosById(productoId ?? '')
    } )
  }

  eliminarProducto(){
    this.Servicio.deleteProductos(this.datos.id)
    this.router.navigate(['/productos'])
  }

}
