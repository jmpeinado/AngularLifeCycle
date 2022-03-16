import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styles: [
  ]
})
export class Pagina2Component implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked {

  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log( 'Pagina 2: ', changes );
  }
  ngDoCheck(): void {
    console.log('Pagina 2: ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('Pagina 2: ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Pagina 2: ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Pagina 2: ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Pagina 2: ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Pagina 2: ngOnDestroy');
    this.timerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log( 'Pagina 2: onInit' );
    this.timerSubscription = interval(1000)
      .subscribe( i => this.segundos++ );
  }

}
