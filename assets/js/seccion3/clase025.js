let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    } ,
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
    direccion: {
        zip: '10880, 90265' ,
        ubicacion: 'Malibu, California',
    },
    'ultima pelicula': 'Infinity War', //No es recomendable definir variables con espacios
};

//Borrar una propiedad

delete personaje.edad;

console.log(personaje);

//Agregar una propiedad
personaje.casado = true;

console.log(personaje);

//convertir objeto en arreglo

const entriesPares = Object.entries(personaje);

console.log(entriesPares);

//congelar objetos, no se podra agregar ni quitar propiedades, ni cambiar el
//valor de las propiedades existentes

Object.freeze(personaje);

delete personaje.casado;

//el metodo anterior cambia las propiedades directas pero no las anidadas, por ejemplo:
personaje.direccion.ubicacion = 'Costa Rica';

//para bloquear una propiedad anidada se tiene que bloquar individualmente

Object.freeze(personaje.direccion);

personaje.direccion.ubicacion = '';

console.log(personaje);

//Para obtener las propiedades de un objeto en forma de array
const propiedades = Object.getOwnPropertyNames(personaje);
console.log({propiedades}); 

//Para obtener los valores en forma de array
const valores = Object.values(personaje);
console.log({valores});