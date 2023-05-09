import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productosConsultas: ProductosService) { }

  categorias: any = [];
  productos: any = [];

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerCategorias();
    this.filtrarProducto();
  }

  obtenerProductos(){
    this.productosConsultas.getProductos().subscribe(res => {
      this.productos = res;
      console.log(res);
    });
  }

  obtenerCategorias(){
    this.productosConsultas.getCategorias().subscribe(res => {
      this.categorias = res;
      console.log(res);
    })
  }

  filtrarProducto(){
    this.productosConsultas.getProducto().subscribe(res => {
      console.log(res);
    })
  }

  categoria: string = '';
  filtrarProductoCategorias(ev: any){
    this.categoria = ev.target.value;
    this.consultas.getProductoPorCategoria(this.categoria).subscribe(res => {
      this.productos = res;
      console.log(res);
    })
  }
}
