import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, 
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = 'Javi';

  constructor() { 
    console.log( 'Pagina1 - constructor' );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Pagina1: ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('Pagina1: ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('Pagina1: ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Pagina1: ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Pagina1: ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Pagina1: ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Pagina1: ngOnDestroy');
  }

  ngOnInit(): void {
    console.log( 'Pagina1 - on init' );
  }

  guardar() {

  }

}
