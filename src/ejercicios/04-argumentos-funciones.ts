/*
    ===== Funciones con objetos como argumento =====
*/

interface CharacterGame {
  name: string;
  pv: number;
  getPv: ()=>void;
}

function curar( character: CharacterGame, curarX: number ): void {
  character.pv += curarX;
  console.log(character);
}

const newCharacter: CharacterGame = {
  name: 'Jonathan',
  pv: 100,
  getPv(){
    console.log('Puntos de vida: ',this.pv);
  }
}

curar( newCharacter, 50 )