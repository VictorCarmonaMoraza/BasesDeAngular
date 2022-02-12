//Component
import { Component } from '@angular/core';
//Interface
import { Personaje } from '../interfaces/dbz.interfac';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor() {
  }

  nuevo: Personaje = {
    nombre: 'Victor',
    poder: 1500
  }

  // agregarNuevoPersonaje(personajeRecibido: Personaje) {
  //   this.personajesEnviados.push(personajeRecibido);
  // }

  // cambiarNombre(event: any) {
  //   //console.table(event);
  //   console.log(event.target.value);
  // }
}
