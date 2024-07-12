import { Component } from '@angular/core';
import { Libro } from './Libro';
import { CarritoService } from '../carrito.service';
import { DataService } from '../data.service';

@Component({
    selector: 'app-lista-libros',
    templateUrl: './lista-libros.component.html',
    styleUrl: './lista-libros.component.scss'
})

export class ListaLibrosComponent {
    libros: Libro[];
    constructor(private carritoService : CarritoService, private data : DataService){
        data.librosData.subscribe(books => this.libros = books);
    }
    

    addToCart(libro : Libro) :void {
        if(libro.quantity > 0){

            if( libro.quantity > libro.stock){
                libro.quantity = libro.stock;
            }
            
            libro.stock -= libro.quantity;

            this.carritoService.addToCart(libro);
        }
    }


}
