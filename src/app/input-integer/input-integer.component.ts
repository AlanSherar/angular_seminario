import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from '../lista-libros/Libro';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent implements OnInit{
  ngOnInit(): void {
  }

  @Input() quantity : number;
  @Input() max : number;
  @Input() min : number = 0;

  @Output() quantityChange : EventEmitter<number> = new EventEmitter<number>();
  
  downQuantity(): void {
    if (this.quantity > this.min) {
        this.quantity--;
        this.quantityChange.emit(this.quantity);
    }
}

upQuantity(): void {
    if (this.quantity >= this.max) {
        this.quantity = this.max;
    } else {
        this.quantity++;
    }
    this.quantityChange.emit(this.quantity);

}

onChangeQuantity(event: any): void {

    if (Number.isNaN((Number)(event.key))) {
        event.preventDefault(); // no funciona
        console.log("event.preventDefault(); // no funciona");
    }else {
        this.quantityChange.emit(this.quantity);
    }
}
}
