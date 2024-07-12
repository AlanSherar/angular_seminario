import { Libro } from "../lista-libros/Libro";

export interface Cart {
    totalPrice : number ;
    cartList : Libro[];

}