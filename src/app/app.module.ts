import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';

import { LibritoAboutComponent } from './librito-about/librito-about.component';
import { LibritoLibrosComponent } from './librito-libros/librito-libros.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    LibritoAboutComponent,
    LibritoLibrosComponent,
    ListaLibrosComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
