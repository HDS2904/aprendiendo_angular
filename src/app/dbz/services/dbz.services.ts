import { Injectable } from "@angular/core";
import { Character } from "../dbz.interface/characters.interface";

@Injectable()
export class DbzServices {

  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 25000,
    },
    {
      name: 'Vegeta',
      power: 23000,
    },
  ]

  get characters(): Character[] {
    return [...this._characters]
  }
}