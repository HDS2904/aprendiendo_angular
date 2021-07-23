/*
    ===== Destructuración de objetos =====
*/

interface Reproductor {
  volume: number;
  second: number;
  song: string;
  details:Details;
}

interface Details {
  author: string;
  year: number;
}

const reproductor: Reproductor = {
  volume: 90,
  second: 36,
  song: 'colors',
  details: {
    author: 'Billie Eilish',
    year: 2018
  }
}

const {volume, second, song, details} = reproductor
const {author} = details

console.log('El volumen actual es: ', volume);
console.log('El segundo actual es: ', second);
console.log('El canción actual es: ', song);
console.log('El autor actual es: ', author);