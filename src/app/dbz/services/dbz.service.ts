import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfac";

@Injectable()
export class DbzService{

  constructor() {
    console.log('Servicio funcionando');
  }

  personajesEnviados: Personaje[] = [{
    nombre: 'Goku',
    poder: 15000
  }, {
    nombre: 'Vegeta',
    poder: 7500
    }];

  get personajes(): Personaje[]{
    return [...this.personajesEnviados];
  }
  agregarPersonaje(personaje: Personaje) {
    this.personajesEnviados.push(personaje);
  }
}
