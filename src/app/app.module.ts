//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
//Componentes
import { AppComponent } from './app.component';
//Servicios
import { DbzService } from './dbz/services/dbz.service';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [DbzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
