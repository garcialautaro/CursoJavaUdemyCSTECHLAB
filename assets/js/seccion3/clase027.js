//funcion tradicional
function saludar (nombre) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1,2];
    console.log('vendo despues del return');
}

let retornoDeSaludar = saludar('Fernando', 40, true, 'Costa Rica');

console.log(retornoDeSaludar);

function sumar ( a, b ) {
    return a + b;
    return 'Hola Mundo';
};

// const sumar2 = (a,b) => {
//     return a + b;
// };
const sumar2 = (a,b) => a + b;

const getAleatorio = () => Math.random();

console.log(getAleatorio());
//console.log(sumar2( 1, 2 ));