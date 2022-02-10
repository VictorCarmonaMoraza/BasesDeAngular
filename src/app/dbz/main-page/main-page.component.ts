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

  nuevo: Personaje = {
    nombre: 'Victor',
    poder: 1500
  }

  // cambiarNombre(event: any) {
  //   //console.table(event);
  //   console.log(event.target.value);
  // }
}
