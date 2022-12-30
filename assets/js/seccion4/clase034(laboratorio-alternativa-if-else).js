//Forma con arreglo (como lo hice yo) -----------------------------------------------------
let diasSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

const hoy = new Date();

let dia = hoy.getDay();

console.time('diaTiempo')
const imprimirDia = () => console.log(diasSemana[dia]);
console.timeEnd('diaTiempo')

imprimirDia();

//Forma con objeto (como lo hizo el profesor) ----------------------------------------------
const diaLetras = {
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado',
}

const imprimirDia2 = () => console.log(diaLetras[dia] || 'Dia no definido');

imprimirDia2();