import { Component, OnInit } from '@angular/core';
import { Character } from '../dbz.interface/characters.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  newCharacter: Character = {
    name: 'hds',
    power: 100000,
  }

  constructor( ){ }

  // addNewCharacter(character: Character) {
  //   this.characters.push( character )
  // }

}
