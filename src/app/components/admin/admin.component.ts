import { Component,OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Product } from 'src/app/models/product';
import { ServiceProductService } from 'src/app/services/product/service-product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {  

  constructor(private servicioProducto:ServiceProductService){   
  }
  //variables de entorno
  entrada: String=new String();

  product:Product= new Product();
    
  
  arrayProducto:Product[]=this.getProduct();

  ngOnInit(): void {
    this.getProduct();
    this.mostrarProducto();
  }
 
  
  //Metodo que muestra
  private getProduct(){
    return this.servicioProducto.getProduct();
  }
  //Metodo que agrega
  //falta agregar validaciones

  //validacion de entrada
 
  public popAgregar(){    
    (async () =>{
      const {value : FormProduct} = await Swal.fire({
        title:'Agregando producto',
       html:'<label><strong>Nombre produto</strong></label><input type="text" id="swal-inputNomPro" class="swal2-input">' +
       '<label><strong>Precio Producto</strong></label><input type="text" id="swal-inputPrecioPro" class="swal2-input">' +
       '<label><strong>descuento producto</strong></label><input type="text" id="swal-inputDescuentoPro" class="swal2-input">',
        showCancelButton: true,
        focusConfirm:true,
        
        confirmButtonText: "Agregar producto",
        cancelButtonText: "Cancelar",
        preConfirm: () => {  
          this.product=new Product();        
          if (!this.product.name_p ) {
            this.product.name_p=(document.getElementById('swal-inputNomPro') as HTMLInputElement).value
            Swal.showValidationMessage(`Entra nombre producto`)
          }        
          if (!this.product.precio_p ) {
            this.product.precio_p=parseInt((document.getElementById('swal-inputPrecioPro') as HTMLInputElement).value)
            Swal.showValidationMessage(`Entra precio producto`)
          }         
            this.product.descuento_p=parseInt((document.getElementById('swal-inputDescuentoPro') as HTMLInputElement).value) 
          if(this.product.precio_p && this.product.precio_p ){
            Swal.showValidationMessage(`producto ingresado`)
            
            this.product.id_product=this.arrayProducto.length + 1;
            this.servicioProducto.addProduct(this.product);
             
            Swal.close();
            this.arrayProducto.forEach(element => {
              console.log(element);
            });
          }else{
            Swal.showValidationMessage(`no se creo faltan variables`)
            
          }         
        }
      })
    }
    )()
    
    //this.servicioProducto.addProduct(this.product);
    
  }
  //Testeo swall 
  mostrarProducto(){
    return console.log(this.product.precio_p)
  }
  /*
   this.memoryArray.forEach(element => {
              if (this.selectedMemory.id == element.id) {
                element.segundo = this.segundo;
                element.memoria = this.memoria;
                this.memorySecService.editMemory(element).subscribe(res => {
                  console.log(res);
                }),
                  err => {
                    console.log(err);
                  };
   */
// metodo para buscar por id
//hay que validar que existan todas las weas
  public delete2(id:any){
    this.servicioProducto.deleteProd(id);
    this.arrayProducto=this.getProduct();
    this.arrayProducto.forEach(element => {
      console.log(element);
    });
  } 
public edit(id:any){
  (async () =>{
    const {value : FormProduct} = await Swal.fire({
      title:'editar producto',
     html:'<label><strong>Nombre produto</strong></label><input type="text" id="swal-inputNomPro" class="swal2-input">' +
     '<label><strong>Precio Producto</strong></label><input type="text" id="swal-inputPrecioPro" class="swal2-input">', 
     
      showCancelButton: true,
      focusConfirm:true,
      
      confirmButtonText: "Editar producto",
      cancelButtonText: "Cancelar",
      preConfirm: () => {  
        this.product=new Product();        
        if (!this.product.name_p ) {
          this.product.name_p=(document.getElementById('swal-inputNomPro') as HTMLInputElement).value
          Swal.showValidationMessage(`Entra nombre producto`)
        }        
        if (!this.product.precio_p ) {
          this.product.precio_p=parseInt((document.getElementById('swal-inputPrecioPro') as HTMLInputElement).value)
          Swal.showValidationMessage(`Entra precio producto`)
        }           
        if(this.product.precio_p && this.product.precio_p ){
          Swal.showValidationMessage(`producto editado`)
          
          
          this.servicioProducto.editPro(id,this.product.name_p, this.product.precio_p);
           
          Swal.close();
          this.arrayProducto.forEach(element => {
            console.log(element);
          });
        }else{
          Swal.showValidationMessage(`no se creo faltan variables`)
          
        }         
      }
    })
  }
  )()
}

}


const input = document.getElementById('first_name') as HTMLInputElement | null;


