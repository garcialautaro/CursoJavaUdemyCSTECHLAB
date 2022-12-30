
/*
* Dias de la semana abrimos a las 11
* Los fines de semana abrimos a las 9 
*/

//Entra a una webapp para consultar si abre hoy

const dia = 2;
const horaActual = 3;

let horaApertura;
let mensaje; // 'Esta abierto'

////if( dia === 0 || dia === 6 ) {
// if([0,6].includes(dia)){
//     console.log( 'Fin de semana' );
//     horaApertura = 9;
//     console.log( horaApertura );
// } else {
//     console.log( 'Dia de semana' );
//     horaApertura = 11;
//     console.log( horaApertura );
// }

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, abrimos a las ${ horaApertura }`;
// }

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, abrimos a las ${ horaApertura }`; 

console.log({ horaApertura, mensaje });