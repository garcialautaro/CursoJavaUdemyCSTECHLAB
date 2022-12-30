console.warn('Asignaciones')

const soyUndefined = undefined;

const soyNull = null;

const soyFalso = false;

const a1 = false && 'Hola Mundo';
const a2 = 'Hola' && 'Mundo' && soyFalso && true;

const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true;
const a5 = soyFalso || soyUndefined || true || 'Ya no soy falso';


console.log({a1});
console.log({a2});

console.log({a3});
console.log({a4});
console.log({a5});

