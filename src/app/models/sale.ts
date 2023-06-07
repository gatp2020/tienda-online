//modelo de venta 
import { Product } from "./product";

export interface Sale {
    id_venta?:number;
    num_venta:number;
    products:Array<Product>;
}
 


