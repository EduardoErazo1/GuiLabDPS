import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'
@Component({
  selector: 'app-sueldo',
  templateUrl: './sueldo.component.html',
  styleUrls: ['./sueldo.component.css']
})
export class SueldoComponent implements OnInit {
  registro=[];
  empleado:any;
  nombre:string;
  sueldoi:number;
  ISSS:number;
  Renta:number;
  AFP:number;
  sueldot:number;
  contador:number;
  constructor() { }

  ngOnInit(): void {
    this.nombre="";
    this.sueldoi=0;
    this.ISSS=0.073;
    this.Renta=0.11;
    this.AFP=0.051;
    this.sueldot=0;
    this.contador=0;
  }
  ingresar(){
    if(this.sueldoi>0)
    {
      this.empleado={"nombre":this.nombre,"sueldoi":this.sueldoi,"ISSS":this.sueldoi*this.ISSS,"Renta":this.sueldoi*this.Renta,"AFP":this.sueldoi*this.AFP,"sueldot":this.sueldoi-(this.sueldoi*this.AFP+this.sueldoi*this.Renta+this.sueldoi*this.ISSS)};
      this.registro.push(this.empleado);
      this.contador++;
    }
  }

}
