/*
    ===== Import y export =====
*/

import { calcIGV, Product } from "./08-desestructuracion-arg";

const cartBuy: Product[] = [
  {
    name: 'Telefono 1',
    price: 100,
  },
  {
    name: 'Telefono 2',
    price: 150,
  },
];

const [total,igv] = calcIGV(cartBuy);

console.log('Total: ', total);
console.log('IGV: ', igv);