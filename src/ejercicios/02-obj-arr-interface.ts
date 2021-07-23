/*
    =====  Objetos, arreglos e interfaces =====
*/
let cualidades: string[] = ['Responsable','Honesto','Social','Trabajo en equipo']

interface Persona {
  name: string;
  age: number;
  cualidades: string[];
  origen?: string;  // el "?" indica que el atributo puede ser opcional
}

const persona: Persona = {
  name: 'Jonathan',
  age: 25,
  cualidades: ['Responsable','Honesto','Trabajo en equipo'],
}
persona.origen = 'S.J.L.';

console.table(persona);