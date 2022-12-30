let juegos = ['Zelda', 'Mario', 'Skyrim', 'Resident Evil'];
console.log('Largo:', juegos.length);

let primero = juegos[0];

let ultimo = juegos[juegos.length - 1];

console.log('Primero:', primero);

console.log('Ultimo:', ultimo);

juegos.forEach(
    (elemento, indice, arr) => {
        console.log({elemento, indice, arr});
    }
);

let nuevoLargoArreglo = juegos.push('F-Zero');

console.log({nuevoLargoArreglo, juegos});

nuevoLargoArreglo = juegos.unshift('Fire Emblem');

console.log({nuevoLargoArreglo, juegos});

let juegoBorrado = juegos.pop();

console.log({juegoBorrado, juegos});

let pos = 1;


console.log(juegos);
let juegosBorrados = juegos.splice(pos,2);

console.log({juegosBorrados, juegos});

let indiceRE = juegos.indexOf('Resident Evil');

console.log({indiceRE});
