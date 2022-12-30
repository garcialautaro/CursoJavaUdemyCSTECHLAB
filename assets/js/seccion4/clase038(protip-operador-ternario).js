const elMayor = ( a, b ) => (a > b) ? a : b;

console.log(elMayor(10,0));

const tieneMembresia = (miembro) => miembro ? '2 USD' : '10 USD';

console.log(tieneMembresia(true));
console.log(tieneMembresia(false));

const amigo = false;
//const amigo = true;

const amigosArr = [
    'Peter',
    'Hulk',
    amigo? 'Thor':'Loki',
    (() =>'Nick Fury')(), //funcion anonima autoinvocada
    elMayor(10,15),
]

console.table({amigosArr});

const nota = 90 // A+ A B+

const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 70 ? 'C+' :
              nota >= 60 ? 'C'  :  'F';

console.log({nota, grado});