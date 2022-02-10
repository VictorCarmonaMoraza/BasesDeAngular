import { Personaje } from './../interfaces/dbz.interfac';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{

  //Con esto le decimos a angular que los datos van a venir del componente padre(main-page)
  @Input('personajesRecibidos') personajes: Personaje[] =[];


}
