

let a = 15;

if ( a >= 10 ) {
console.log( '"a" es mayor o igual a 10');
} else {
    console.log( '"a" es menor a 10');
}

// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log({hoy, dia});

if( dia === 0 ) {
    console.log('Domingo');
} else if ( dia === 1 ) {
    console.log('Lunes');
} else {
    console.log('No es Domigno ni Lunes');
} ;
