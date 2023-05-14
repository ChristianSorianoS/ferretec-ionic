import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public productos = [
    {
      id:'1',
      titulo:'Martillo',
      url : "https://easycl.vtexassets.com/arquivos/ids/364511/9008367.jpg?v=637533649361400000",
      comentarios : ["prueba1", "prueba 2"]
    },
    {
      id:'2',
      titulo:'Taladro',
      url : "https://www.akenergystore.cl/wp-content/uploads/2020/07/005.jpg",
      comentarios : ["prueba1", "prueba 2"]
    }

  ];

  constructor() { }

  //lista de productos
  getProductos(){
    return [...this.productos]

  }

  //agregar productos
  addProductos(titulo: string, url: string, comentarios: string[]){
    this.productos.push(
      {
        id: this.productos.length + 1 + "",
        titulo: titulo,
        url: url,
        comentarios: comentarios
      }
    )
  }

  //Eliminar producto
  deleteProductos(productoID: string){
    this.productos = this.productos.filter( p => {
      return p.id !== productoID
    })
  }

  //buscar producto por ID
  getProductosById(productoID: string){
    return {
      ...this.productos.find(p => {
        return p.id === productoID
      })
    }
  }

}
