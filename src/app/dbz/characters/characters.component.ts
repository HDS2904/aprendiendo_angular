import { Component, Input } from '@angular/core';
import { Character } from '../dbz.interface/characters.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {

  // @Input() characters: Character[] = [];

  constructor( private dbzServices: DbzServices ){ }

  get characters() {
    return this.dbzServices.characters;
  }

}
