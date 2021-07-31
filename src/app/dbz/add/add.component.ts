import { Component, Input } from '@angular/core';
import { Character } from '../dbz.interface/characters.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  @Input() characters: Character[] = [];
  @Input() newCharacter: Character  = {
    name: '',
    power: 0,
  }

  addCharacter() {
    if(this.newCharacter.name.trim().length === 0) {return;}
    this.characters.push(this.newCharacter)
    this.newCharacter ={
      name:'',
      power: 0,
    }
  }
}
