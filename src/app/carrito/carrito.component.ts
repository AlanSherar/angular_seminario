import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Libro } from '../lista-libros/Libro';
import { DataService } from '../data.service';
import { Cart } from './Cart';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  clearCart() {
    this.dataService.restockearAll(this.cart.cartList);
    this.cartService.clearCart();
  }

  removeFromCart(libro: Libro) {
    
    this.dataService.restockear(libro.id, libro.quantity);

    this.cartService.removeFromCart(libro.id);

  }

  cart : Cart;

  constructor(private cartService: CarritoService, private dataService: DataService) {
    cartService.cart.subscribe(carrito => this.cart = {... carrito});
  }

  
}
