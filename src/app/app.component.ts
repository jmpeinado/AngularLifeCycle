import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';

  mostrar1: boolean = true;
  mostrar2: boolean = true;

  mostrarOcultar1( ) {
    this.mostrar1 = !this.mostrar1;
  }
  mostrarOcultar2( ) {
    this.mostrar2 = !this.mostrar2;
  }
}
