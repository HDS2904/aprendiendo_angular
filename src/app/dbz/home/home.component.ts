import { Component, OnInit } from '@angular/core';
import { Character } from '../dbz.interface/characters.interface';

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

}
