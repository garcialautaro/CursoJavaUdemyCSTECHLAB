//por valor
let a = 10;

let b = a;

a = 30;
//console.log({a, b});

//por referencia, todos los objetos son pasados por referencia

let juan = { nombre: 'Juan' }

let ana = juan;
ana.nombre = 'Ana'; 
//al escribir la linea anterior, no solo se cambia le nombre del nombre de Ana, sino
//tambien el de juan

//console.log({juan, ana});

const cambiaNombre = (persona) => { 
    persona.nombre = 'Tony';
    return persona};

//lo mismo sucede en las siguientes lineas, se cambian los nombres de las dos personas.
let peter = { nombre: 'Peter'};
let tony = cambiaNombre(peter);

//console.log(peter);
//console.log(tony);

//para romper con la referencia, se hace lo siguiente:

const cambiaNombre2 = ({...persona}) => { 
    persona.nombre = 'Tony';
    return persona};

let lautaro = { nombre: 'Lautaro'};
let francisco = cambiaNombre({...lautaro}); //se utiliza el operador spread y se rompe la referencia


//console.log(lautaro);
//console.log(francisco);

//Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('spread')
const otrasFrutas = [...frutas];
console.timeEnd('spread')

//otra forma de romper la referencia es:

otrasFrutas.push('Mango');

console.time('slice');
const otrasFrutas2 = frutas.slice(0); //solo para los arreglos
console.timeEnd('slice');

//console.table({frutas, otrasFrutas, otrasFrutas2});
