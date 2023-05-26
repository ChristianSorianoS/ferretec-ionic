import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.page.html',
  styleUrls: ['./editar-productos.page.scss'],
})
export class EditarProductosPage implements OnInit {
  editarProductoForm: FormGroup;

  constructor(public Servicio: ProductosService, private router: Router, public formBuilder: FormBuilder){
    this.editarProductoForm = this.formBuilder.group({
      name: [''],
      url: [''],
      detalle: [''],
   })
  }

  ngOnInit(): void {
    const data = this.Servicio.getProductosById(this.router.url.split('/')[2]);
    console.log("data",data)
    if(data){
      this.initializeForm(data)
    }
  }

  initializeForm(data : any){
    this.editarProductoForm.setValue({
      name: data.name,
      url: data.url,
      detalle: data.details
    })
  }

  editarProducto(){
    if(this.editarProductoForm.valid){
    const id = this.router.url.split('/')[2]
    const name = this.editarProductoForm.get('name')?.value
    const detalle = this.editarProductoForm.get('detalle')?.value
    const url = this.editarProductoForm.get('url')?.value

    this.Servicio.updateProducto(id,name,url,detalle)
    this.router.navigate(['/productos'])
    }
  }

}
