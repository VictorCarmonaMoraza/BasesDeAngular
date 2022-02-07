//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppComponent } from './app.component';
import {ContadorComponet} from './contador/contador.component'
import { HeroeComponent } from './heroes/heroe/heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponet,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
