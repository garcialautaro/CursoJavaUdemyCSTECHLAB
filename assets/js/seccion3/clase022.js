//const arr = new Array(10);

//console.log(arr);

// let arr = [];

// console.log(arr);

let videojuegos = ['Mario 3', 'Megaman', 'Uncharted'];

//console.log(videojuegos[0]);

//console.log(typeof videojuegos);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,    
    function (){},
    ()=>{},
    {a:1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman',
    ]],
];

console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);

let arregoDentroDeArreglo = arregloCosas[7];

console.log(arregoDentroDeArreglo);
console.log(arregoDentroDeArreglo[3]);