import { Component, OnInit } from '@angular/core';

interface Character {
  name: string;
  power: number;
}
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

  addCharacter() {
    if(this.newCharacter.name.trim().length === 0) {return;}
    this.characters.push(this.newCharacter)
    this.newCharacter ={
      name:'',
      power: 0,
    }
  }

}
