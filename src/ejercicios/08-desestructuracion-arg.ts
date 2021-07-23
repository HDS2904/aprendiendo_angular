/*
    ===== Desestructuración de argumentos =====
*/

interface Product {
  name: string;
  price: number;
}

const cpu: Product = {
  name: 'TUF GAMING',
  price: 4100,
}

const phone: Product = {
  name: 'Redmi 7',
  price: 570,
}

function calcIGV( products: Product[] ) {
  let total = 0;
  // Desestructuración por parametro
  products.forEach(({price})=>{
    total += price;
  })
  return [total, total*0.18];
}

const articulos = [ cpu, phone]

const [total,igv] = calcIGV( articulos )

console.log('Total: ', total);
console.log('IGV: ', igv);