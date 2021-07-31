import { Component, OnInit } from '@angular/core';
import { Character } from '../dbz.interface/characters.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 25000,
    },
    {
      name: 'Vegeta',
      power: 23000,
    },
  ]

  newCharacter: Character = {
    name: 'hds',
    power: 100000,
  }

  addNewCharacter(character: Character) {
    this.characters.push( character )
  }

}
