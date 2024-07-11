import { Injectable } from '@angular/core';
import { Libro } from './lista-libros/Libro';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  private _cartList: Libro[] = [];
  cartList: BehaviorSubject<Libro[]> = new BehaviorSubject(this._cartList);


  clearCart() {
    this._cartList = [];
    this.cartList.next(this._cartList);

  }
  removeFromCart(id: number) {
    let i = this._cartList.findIndex( book => book.id == id);
    this._cartList.splice(i,1);
    this.cartList.next(this._cartList);
  }

  addToCart(libro: Libro) {
    let book: Libro | undefined = this._cartList.find((b) => b.id == libro.id);
    if (!book) {
      this._cartList.push({ ...libro, quantity: (Number)(libro.quantity) });
    } else {
      book.quantity += (Number)(libro.quantity);
    }

    this.cartList.next(this._cartList);
  }

  constructor() { }

}
