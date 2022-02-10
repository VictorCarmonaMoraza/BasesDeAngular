import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfac';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  personajesEnviados: Personaje[] = [{
    nombre: 'Goku',
    poder:15000
  }, {
    nombre: 'Vegeta',
    poder:7500
    }];

  nuevo:Personaje = {
    nombre: '',
    poder:0
  }

  agregar() {
    //trim es para borrar espacios en blanco
    if (this.nuevo.nombre.trim().length === 0) {
      //Nos salimos del metodo
      return;
    }
    this.personajesEnviados.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder:0
    }
    console.log(this.nuevo);
  }

  // cambiarNombre(event: any) {
  //   //console.table(event);
  //   console.log(event.target.value);
  // }
}
