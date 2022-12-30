const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa false');
    return false;
}
console.warn('NOT o la negacion');
console.log(regresaTrue());  
console.log(!regresaTrue());
console.log(regresaFalse());  
console.log(!regresaFalse());

console.warn('AND');
console.log(true && true); //regresa true
console.log(true && false); //regresa false

// como la primera funcion devuelve falso solo ejecuta regresaFalse()
console.log(regresaFalse() && regresaTrue()); 

// ejecuta las dos funciones ya que la primera devuelve true
console.log(regresaTrue() && regresaFalse());

console.warn('OR')

console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() || regresaFalse());

