
//funcion tradicional
function saludar (nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);
}


//funcion de flecha con la palabra function
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

//funcion de flecha sin la palabra function
const saludarFlecha = (nombre) =>{
    console.log('Hola ' + nombre);
}


saludarFlecha('Fernando', 40, true, 'Costa Rica');