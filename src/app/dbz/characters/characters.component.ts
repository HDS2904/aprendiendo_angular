import { Component } from '@angular/core';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {

  constructor( private dbzServices: DbzServices ){ }

  get characters() {
    return this.dbzServices.characters;
  }

}
