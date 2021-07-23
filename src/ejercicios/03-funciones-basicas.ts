/*
    ===== Funciones básicas =====
*/

function sumar( a: number, b: number ): number {
  return a + b;
}

// Orden de parametros: 1-obligatorios 2-opcionales 3-valores-defecto
const multiplicar = (a:number,b:number,base:number=2) => {
  return a * base;
}

const resultArrow = (a:number,b:number) => {
  return a + b;
}

const result = sumar(7,10)
const result2 = multiplicar(2,5,4)

console.log(result);
console.log(result2);