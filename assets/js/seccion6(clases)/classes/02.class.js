

class Persona{
    //propiedades estaticas
    static _conteo = 0;

    //primero las variables
    nombre  = '';
    codigo  = '';
    frase   = '';
    comida  = '';

    //segundo constructor
    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
        Persona._conteo++;
    }

    //tercero los get y set
    set setComida(comida) { this.comida = comida.toUpperCase(); } 
    get getComida() { return this.comida; }

    //get y set staticos
    static get getConteo() { return Persona._conteo; }

    //cuarto los metodos
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

    //metotods estaticos
    static mensajeStc(){
        console.log(this.nombre);
        console.log('Soy un metodo estatico');
    }
}



const spiderman = new Persona('Julian Alvarez', 'La araña', 'Soy la araña que pica');
const messi = new Persona('Lio Messi', 'Messias', 'Anda palla bobo');

// console.log(spiderman);

//messi.quienSoy();
//messi.miFrase();
// messi.setComida ='Sanguche de milanga';

// console.log(messi);

// console.log(messi.getComida);

// Persona._conteo = 2;
console.log(Persona.getConteo);
console.log(Persona.mensajeStc());