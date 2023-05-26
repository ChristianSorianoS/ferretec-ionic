import { Injectable } from '@angular/core';
import { LocalStorage } from "lowdb/browser"
import { LowSync } from "lowdb"

type Producto = {
    id: string,
    name: string,
    url: string,
    details: string
  }

  @Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  public productos : Producto[] = [
    {
      id:'1',
      name:'Martillo',
      url : "https://easycl.vtexassets.com/arquivos/ids/364511/9008367.jpg?v=637533649361400000",
      details : "Martillo carpintero 0,45kg Robust"
    },
    {
      id:'2',
      name:'Taladro',
      url : "https://www.akenergystore.cl/wp-content/uploads/2020/07/005.jpg",
      details : "Taladro Percutor Inalámbrico Dewalt Dcd778/batería 2ah 20v"
    },
    {
      id:'3',
      name:'Set destornilladores',
      url : "https://http2.mlstatic.com/D_NQ_NP_2X_682385-MLC42143204394_062020-F.webp",
      details : "Juego 6 Destornilladores Con Soporte Stanley 60-060s"
    }

  ];

  public adapter = new LocalStorage<Producto[]>('db')
  public db = new LowSync<Producto[]>(this.adapter, [{ id: '', name: '', url: '', details: '' }])

  constructor() {  
    this.db.read()
    if(this.db.data.length === 0){
    this.db.data = this.productos;
    }
    this.db.write() 
    console.log(this.db.data)
  }

  //lista de productos
  getProductos(){
    this.db.read()
    return [...this.db.data]

  }

  //agregar productos
  addProductos(name: string, url: string, details: string){
    this.db.data.push(
      {
        id: this.productos.length + 1 + "",
        name: name,
        url: url,
        details: details
      }
    )
    this.db.write()
  }

  //Eliminar producto
  deleteProductos(productoID: string){
    this.db.data = this.db.data.filter( p => {
      return p.id !== productoID
    })
    this.db.write()
  }

  //buscar producto por ID
  getProductosById(productoID: string){
    return {
      ...this.db.data.find(p => {
        return p.id === productoID
      })
    }
  }

  //actualizar producto
  updateProducto(id: string, name: string, url: string, details: string){
    this.db.data.find(p => {
      if(p.id === id){
        p.name = name
        p.url = url
        p.details = details
        this.db.write()
      }
    })
  }
}
