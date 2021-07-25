/*
    ===== Código de TypeScript =====
*/

class Person {
  constructor(
    public name: string,
    public address: string,
  ) {}
}
class Heroe extends Person{
  constructor( 
    public alterEgo: string,
    public age: number,
    public firstName: string
  ) {
    super(
      firstName,
      'New York, EE.UU',
    )
  }
}

const ironman = new Heroe('Iroman',40,'Tony');

console.log(ironman);