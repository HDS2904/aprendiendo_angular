import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  name: string = 'Iroman';
  age: number = 45;
  get nameCapitalize(): string {
    return this.name.toUpperCase();
  }
  getName(): string {
    return `${this.name} - ${this.age}`;
  }
  changeName(): void {
    this.name = 'Spiderman';
  }
  changeAge(): void {
    console.log('Gozu...');
    this.age = 30;
  }
}