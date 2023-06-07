import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {

  //constructor(private hhtpclient:HttpClient) {} 
    //Crear api
    products:Product[]=[
      {
        id_product:111,
        precio_p:10000,
        descuento_p:0,
        name_p:'Mantequilla'
      },
      {
        id_product:222,
        precio_p:1000,
        descuento_p:0,
        name_p:'deterjente'
      },
      {
        id_product:333,
        precio_p:5000,
        descuento_p:0,
        name_p:'arina'
      },
      {
        id_product:444,
        precio_p:500,
        descuento_p:0,
        name_p:'pan'
      },
      {
        id_product:555,
        precio_p:1000,
        descuento_p:0,
        name_p:'bebida'
      }
    ]

   

  //metodo get mostrar
  public getProduct(){
    return this.products;
  }
  //motodo Agregar producto

  public addProduct(product:Product){
    /*
    (async () => {
      const {value:newProduct}= await Swal.fire({
        title:'Ingrese serie del producto',
        input:'text',
        showCancelButton:true
      });
      let data ={serie:newProduct }
    }) */
    this.products.push(product);
    
    console.log(this.products+'estoy en servicio')
  }

  //metodo post editar
  //metodo dalete eliminar
//this.memoryArray = this.memoryArray.filter(x => x.id == res.results.data.id);
  public deleteProd(id:number):any{
    this.products=this.products.filter(product => product.id_product != id)
    this.products.forEach(element => {
      console.log(element, 'desde el service' );
    });

      return this.products;   
  }
  //metodo edit editar
  public editPro(id:number,nombre:string,precio:number){
    this.products.forEach(element => {
      if(element.id_product==id){
        element.name_p=nombre
        element.precio_p=precio
      }
    });
  }
}
