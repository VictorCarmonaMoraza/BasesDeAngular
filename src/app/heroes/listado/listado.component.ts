import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() {
    //El constructor se ejecuta siempre antes que el metodo ngOnInit
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
