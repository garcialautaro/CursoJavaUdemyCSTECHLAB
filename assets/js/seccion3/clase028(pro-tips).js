//retorno de un objeto
    //funcion tradicional
    function crearPersona (nombre, apellido) {
        return {
            nombre: nombre, 
            apellido: apellido,
        };
    };

    //console.log(crearPersona('Fernando','Herrera'));

    //funcion lamda 
    const crearPersona2 = (nombre, apellido) => ({ nombre, apellido,}); // ponerlo entre parentesis

    //console.log(crearPersona2('Lautaro','Garcia'));

//para imprimir varias variables
    //funcion tradicional
    function imprimirArgumentos() { 
        console.log(arguments);
    } 

    imprimirArgumentos(10, true, 'Lautaro', 'Garcia');

    //funcion lambda, con el parametro REST (...) se crea un arreglo con todos los argumentos. No
    //pueden haber parametros despues del parametro rest, pero si antes.
    const imprimirArgumentos2 = (...arguments) => console.log( arguments ); //parametro REST ...

    const imprimirArgumentos3 = (edad, ...arguments) => console.log( {edad, arguments} ); //parametro REST ...
    
    //la siguiente linea de codigo tira error:
    //const imprimirArgumentos4 = (...arguments, edad) => console.log( {edad, arguments} ); //parametro REST ...

    const imprimirArgumentos5 = (edad, ...arguments) => arguments;

    const [casado, vivo, nombre, apellido] = imprimirArgumentos5(10, true, 'Fernando', 'Herrera');

    console.log({vivo, nombre, apellido});

    const {apellido: apellidoPersona} = crearPersona2 ('Fernando', 'Herrera');

    console.log({apellidoPersona});

    //desestructuracion de argumentos

    let tony = {
        nombre: 'Tony Stark',
        codeName: 'IronMan',
        vivo: false,
        edad: 40,
        trajes: ['Mark I', 'Mark V', 'HulkBuster'],
    };

    const imprimePropiedades = ({ nombre = '', codeName = '', vivo = true, edad = 0, trajes = null }) => 
    console.log( {nombre, codeName, vivo, edad, trajes });

    imprimePropiedades(tony);