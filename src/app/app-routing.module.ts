import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibritoAboutComponent } from './librito-about/librito-about.component';
import { LibritoLibrosComponent } from './librito-libros/librito-libros.component';

const routes: Routes = [
  { path: '', redirectTo: 'libros', pathMatch: 'full' },
  { path: 'libros', component: LibritoLibrosComponent },
  { path: 'about', component: LibritoAboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
