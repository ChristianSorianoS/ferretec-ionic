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
      comentarios : ["Martillo carpintero 0,45kg Robust"]
    },
    {
      id:'2',
      titulo:'Taladro',
      url : "https://www.akenergystore.cl/wp-content/uploads/2020/07/005.jpg",
      comentarios : ["Taladro Percutor Inalámbrico Dewalt Dcd778/batería 2ah 20v"]
    },
    {
      id:'3',
      titulo:'Set destornilladores',
      url : "https://http2.mlstatic.com/D_NQ_NP_2X_682385-MLC42143204394_062020-F.webp",
      comentarios : ["Juego 6 Destornilladores Con Soporte Stanley 60-060s"]
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
