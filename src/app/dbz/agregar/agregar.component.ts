import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfac';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() personajes: Personaje[] = [];


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    //trim es para borrar espacios en blanco
    if (this.nuevo.nombre.trim().length === 0) {
      //Nos salimos del metodo
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    console.log(this.nuevo);
  }

}
