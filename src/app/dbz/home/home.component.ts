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

  newCharacter: Character = {
    name: 'hds',
    power: 100000,
  }

  addCharacter() {
    console.log(this.newCharacter);
  }

}
