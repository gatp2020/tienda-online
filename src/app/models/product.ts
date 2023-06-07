export class Product {
    id_product:number=1;
    precio_p?:number;
    descuento_p?:number;
    name_p?:string;


    public constructor( ){
        this.id_product=this.id_product++;
    }
    
}
