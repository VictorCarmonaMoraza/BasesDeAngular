import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo: string = 'Contador App';
  numero: number = 10;
  numero2: number = 20;
  numero3: number = 5;

  base: number =5;

  sumar() {
    this.numero2 += 1;
  }

  restar() {
    this.numero2 -= 1;
  }

  acumular(valor: number) {
    this.numero += valor;
  }

  acumular5(valor: number) {
    this.numero3 += valor;
  }
}
