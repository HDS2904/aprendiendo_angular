/*
    ===== Encadenamiento opcional =====
*/

interface Passenger {
  name: string;
  sons?: string[];
}

const pasajero1: Passenger = {
  name: 'Jonathan'
}

const pasajero2: Passenger = {
  name: 'Lucy',
  sons: ['Tenma','Mónica']
}

function getSons( passenger: Passenger ): void {
  const numSons = passenger.sons?.length || 0;
  console.log( numSons );
}

getSons( pasajero1 )