//Servicios
import { DbzService } from './../services/dbz.service';

import { Component} from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  //Con esto le decimos a angular que los datos van a venir del componente padre(main-page)
  // @Input('personajesRecibidos') personajes: Personaje[] =[];

  constructor(private dbzService: DbzService) {

  }

  //Accedemos mediante un metodo a los personajes del servicio
  get personajes() {
    return this.dbzService.personajesEnviados;
  }

}
