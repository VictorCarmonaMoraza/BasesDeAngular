import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  agregar() {
    //Quita el refres del formulario pero en formularios que no tiene importado el formModule
    //event.preventDefault();
    console.log('hey');
  }
}
