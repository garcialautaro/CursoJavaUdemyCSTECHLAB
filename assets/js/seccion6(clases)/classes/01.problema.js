const laut = {
    nombre: 'Lautaro',
    edad: 30,
    imprimir() {
        console.log([this.nombre, this.edad]);
    },
}
const fher = {
    nombre: 'Fernando',
    edad: 13,
    imprimir() {
        console.log([this.nombre, this.edad]);
    },
}

//laut.imprimir();

//CLASES DE LA FORMA ANTIGUA
function Persona(nombre, edad){
    this.nombre = nombre,
    this.edad = 10,
    this.imprimir = () => {
        console.log([this.nombre, this.edad]);
    }
}

const maria = new Persona('Maria',10)

const melissa = new Persona('Melissa',13)


console.log({maria});

maria.imprimir();
melissa.imprimir();