import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Iroman', 'Doctor Stone', 'Thor','Spiderman']
  hero: string = '';
  deleteHero() {
    this.hero = this.heroes.pop() || 'No hay mas heroes'
  }
}
