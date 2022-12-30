
class Singleton {
    static #instancia;

    #nombre = '';

    constructor(nombre) {
        if (!!Singleton.#instancia) {
           return Singleton.#instancia; 
        }

        Singleton.#instancia = this;
        this.#nombre = nombre;
        console.log(Singleton.#instancia);
    }

    get getNombre() {return this.#nombre;}
}

const instancia1 = new Singleton('Messi');

console.log(`nombre en la instancia 1 es: ${instancia1.getNombre}`);

const instancia2 = new Singleton('Julian');

console.log(`nombre en la instancia 2 es: ${instancia1.getNombre}`);

const instancia3 = new Singleton('Enzo');

console.log(`nombre en la instancia 3 es: ${instancia1.getNombre}`);

