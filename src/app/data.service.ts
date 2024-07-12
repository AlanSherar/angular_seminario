import { Injectable } from '@angular/core';
import { Libro } from './lista-libros/Libro';
import { BehaviorSubject, find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _librosData: Libro[] = [];


  librosData: BehaviorSubject<Libro[]> = new BehaviorSubject(this._librosData);

  restockearAll(cartList: Libro[]) {
    cartList.forEach(cartListItem => {
      let item = this._librosData.find(book => book.id == cartListItem.id);
      if (item) {
        item.stock += cartListItem.quantity;
      }
    })
    this.librosData.next(this._librosData);

  }

  restockear(id: number, quantity: number) {
    let item = this._librosData.find(book => book.id == id);
    if (item) {
      item.stock += quantity;
      this.librosData.next(this._librosData);
    }
  }


  constructor() {
    fetch("../libritos_data.json")
      .then(res => {
        res.json()
          .then(data => {
            this._librosData = data;
            this.librosData.next(this._librosData);
          })
      });
  }

}
