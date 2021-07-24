/*
    ===== Código de TypeScript =====
*/

class Heroe {
  // alterEgo: string;
  // age: number;
  // fistName: string;
  constructor( 
    public alterEgo: string,
    public age: number,
    public firstName: string
  ) {}
}

const ironman = new Heroe('Iroman',40,'Tony');

console.log(ironman);