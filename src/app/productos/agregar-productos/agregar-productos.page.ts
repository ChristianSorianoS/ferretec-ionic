import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.page.html',
  styleUrls: ['./agregar-productos.page.scss'],
})
export class AgregarProductosPage implements OnInit {
  public datos: any = {}
  productoForm: FormGroup;

  constructor(public Servicio: ProductosService, private router: Router, public formBuilder: FormBuilder){
    this.productoForm = this.formBuilder.group({
      name: [''],
      url: [''],
      detalle: [''],
   })
  }

  ngOnInit(): void {
  }

  agregarProductos(){
    if(this.productoForm.valid){
      const name = this.productoForm.get('name')?.value
      const detalle = this.productoForm.get('detalle')?.value
      const url = this.productoForm.get('url')?.value

      this.Servicio.addProductos(name,url,detalle)
      this.router.navigate(['/productos'])
    }
  }

}
