class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    #calcularArea() {
        console.log(this.area*2);
    }
}

const rectangulo1 = new Rectangulo(10, 15);
rectangulo1.area = 100;

console.log(rectangulo1);