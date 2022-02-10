import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfac';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
//Es para emitir eventos al exterior o para mandar al padre
  @Output() nuevoPersonaje:EventEmitter<Personaje>= new EventEmitter<Personaje>();

  agregar() {
    //trim es para borrar espacios en blanco
    if (this.nuevo.nombre.trim().length === 0) {
      //Nos salimos del metodo
      return;
    }
    this.nuevoPersonaje.emit(this.nuevo);
    console.log(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
