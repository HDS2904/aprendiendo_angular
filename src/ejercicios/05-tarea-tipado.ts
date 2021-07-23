/*
    ===== Tarea de tipado =====
*/
interface Address {
  street: string;
  country: string;
  city: string;
}
interface SuperHeroe {
  name: string;
  age: number;
  address: Address;
  getAddress: ()=>string;
}

const superHeroe: SuperHeroe = {
  name: 'Spiderman',
  age: 30,
  address: {
    street: 'Main St',
    country: 'USA',
    city: 'NY'
  },
  getAddress() {
    return this.name + ', ' + this.address.city + ', ' + this.address.country;
  }
}

const address = superHeroe.getAddress();

console.log(address);