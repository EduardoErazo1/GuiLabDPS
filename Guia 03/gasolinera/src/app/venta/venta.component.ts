import { Component, OnInit } from '@angular/core';
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  gasolina;
  opcionSeleccionado: string ;
  cantidadg:number;
  valorconversion:number;
  constructor() { }

  ngOnInit(): void {
    this.gasolina=["Regular","Diesel","Especial"];
    this.opcionSeleccionado="Selecciona";
    this.cantidadg=0.05;
    this.valorconversion=0;
  }
  capturar() {
    switch(this.opcionSeleccionado){
    case'Regular':
    this.valorconversion=this.cantidadg*4.05;
    break;
    case'Diesel':
    this.valorconversion=this.cantidadg*3.95;
    break;
    case'Especial':
    this.valorconversion=this.cantidadg*4.25;
    break;
    }
    }
    

}
