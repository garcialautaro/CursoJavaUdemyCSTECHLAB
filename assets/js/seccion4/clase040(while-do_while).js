const carros = ['Ford', 'Mazda', 'Toyota', 'Peugeot']

let i = 0;
console.warn('While'); //----------------------------------------------------------------
while ( carros[i] ) { 
    if(i===1) {//break;
                i++;
                continue;
    }
    console.log(`carro: ${carros[i]}`);
    i++;
}


console.warn('Do While'); //----------------------------------------------------------------
let j = 10;
do{ 
    console.log(`carro: ${carros[j]}`);
    j++;
}  while (carros[j]){};