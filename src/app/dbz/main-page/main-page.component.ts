import { Component, OnInit } from '@angular/core';


interface Personaje{
  nombre: string;
  poder: number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo:Personaje = {
    nombre: 'Trucks',
    poder:14000
  }

  agregar() {
    //Quita el refres del formulario pero en formularios que no tiene importado el formModule
    //event.preventDefault();
    // console.table(this.nuevo);
    console.log(this.nuevo);
  }

  // cambiarNombre(event: any) {
  //   //console.table(event);
  //   console.log(event.target.value);
  // }
}
