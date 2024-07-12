import { Injectable } from '@angular/core';
import { Libro } from './lista-libros/Libro';
import { BehaviorSubject } from 'rxjs';
import { Cart } from './carrito/Cart';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {

  private _cart: Cart = {
    cartList: [],
    totalPrice : 0,
  };;
  cart: BehaviorSubject<Cart> = new BehaviorSubject(this._cart);

  clearCart() {
    this._cart = {
      cartList: [],
      totalPrice : 0,
    };
    this._cart.totalPrice = 0;
    this.cart.next(this._cart);
    
  }
  removeFromCart(id: number) {

    let i = this._cart.cartList.findIndex( book => book.id == id);

    let book = this._cart.cartList.splice(i,1)[0];

    this._cart.totalPrice -= (book.price*book.quantity);
     
    this.cart.next(this._cart);
  }

  addToCart(libro: Libro) {

    let book: Libro | undefined = this._cart.cartList.find((b) => b.id == libro.id);

    if (!book) {
      this._cart.cartList.push({ ...libro, quantity: (Number)(libro.quantity) });
    } else {
      book.quantity += (Number)(libro.quantity);
    }
    this._cart.totalPrice += (libro.price*libro.quantity);

    this.cart.next(this._cart);
  }

  constructor() { }

}
