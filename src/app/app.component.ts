import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title: string = 'contador app';
  cont: number = 0;
  base: number = 1;
  accumulate( valor: number) {
    this.cont += valor;
  }
}
