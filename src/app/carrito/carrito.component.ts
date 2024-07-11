import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Libro } from '../lista-libros/Libro';
import { DataService } from '../data.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  clearCart() {
    this.data.restockearAll(this.cartList);
    this.cart.clearCart();
  }

  removeFromCart(id: number, quantity : number) {
    this.data.restockear(id, quantity);
    this.cart.removeFromCart(id);
  }

  cartList: Libro[];

  constructor(private cart: CarritoService, private data: DataService) {
    cart.cartList.subscribe(carrito => this.cartList = carrito);
  }

  
}
