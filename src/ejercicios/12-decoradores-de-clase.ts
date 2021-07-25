/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]):{} }>(
  constructor: T
) {
  return class extends constructor{
    newProperty = 'new Property';
    hello = 'override';
  };
}


@classDecorator
class MiSuperClase {
  public miPropiedad: string = 'Hola';
  getMessage(){
    console.log('Este es un string');
  }
}

console.log( MiSuperClase );

const miClase = new MiSuperClase();

console.log(miClase);