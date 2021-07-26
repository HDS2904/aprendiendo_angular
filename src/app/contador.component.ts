import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  template: `
  <h1>{{title}}</h1>
  <h3>La base es: {{base}}</h3>

  <button (click)="accumulate(+ base )" > + {{base}} </button>

  <span> {{cont}} </span>

  <button (click)="accumulate(- base)" > - {{base}} </button>
  `
})
export class ContadorComponent {
  title: string = 'contador app';
  cont: number = 0;
  base: number = 1;
  accumulate( valor: number) {
    this.cont += valor;
  }
}