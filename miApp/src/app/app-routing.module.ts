import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { BuscarComponent } from './buscar/buscar.component';

const rutas: Routes = [
  {
    path: 'inicio',
    Component: ProductosComponent
  },

  {
    path: 'buscar', 
    Component: BuscarComponent
  },

  {
    path: '',
    redirecTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
