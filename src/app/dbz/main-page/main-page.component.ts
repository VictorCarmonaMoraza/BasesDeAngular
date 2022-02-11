//Servicio
import { DbzService } from './../services/dbz.service';
//Component
import { Component } from '@angular/core';
//Interface
import { Personaje } from '../interfaces/dbz.interfac';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(dbszService: DbzService) {

  }

  personajesEnviados: Personaje[] = [{
    nombre: 'Goku',
    poder:15000
  }, {
    nombre: 'Vegeta',
    poder:7500
    }];

  nuevo: Personaje = {
    nombre: 'Victor',
    poder: 1500
  }

  agregarNuevoPersonaje(personajeRecibido: Personaje) {
    this.personajesEnviados.push(personajeRecibido);
  }

  // cambiarNombre(event: any) {
  //   //console.table(event);
  //   console.log(event.target.value);
  // }
}
