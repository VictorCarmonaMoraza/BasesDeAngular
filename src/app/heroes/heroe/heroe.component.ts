import { Component } from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

  //creamos una propiedad
  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    //esto es lo mismo que el ultimo return
    //return this.nombre + ' - ' + this.edad;
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Ana';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }

}
