import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})

export class BuscarComponent implements OnInit {

  constructor(private productosServicio: ProductosService) {}

  ngOnInit{} void {

  }

  idProducto: number = 0;

  producto: any = {}

  buscarProducto() {
    this.productosServicio.getProducto(this.idProducto).subscribe(res => {
      this.producto = res; 

      console.log(this.producto)
    })
  }

}
