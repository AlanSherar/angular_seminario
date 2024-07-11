import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';

import { LibritoAboutComponent } from './librito-about/librito-about.component';
import { LibritoLibrosComponent } from './librito-libros/librito-libros.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    LibritoAboutComponent,
    LibritoLibrosComponent,
    ListaLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
