import { Component, Input } from '@angular/core';
import { Character } from '../dbz.interface/characters.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  @Input() newCharacter: Character  = {
    name: '',
    power: 0,
  }
  
  constructor( private dbzServices: DbzServices ){}

  addCharacter() {
    if(this.newCharacter.name.trim().length === 0) {return;}
    this.dbzServices.addCharacter(this.newCharacter);
    this.newCharacter ={
      name:'',
      power: 0,
    }
  }
}
