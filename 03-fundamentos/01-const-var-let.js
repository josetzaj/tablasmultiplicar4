// Problemas con el var - explique con este ejemplo
// Las variables var se crean en un ámbito global
console.log('--------Trabajando con VAR--------');
var nombre = 'Bill';
console.log(nombre);

if(true){
    nombre = 'Stve'; // en este scope del if se toma a nombre como variable global
    console.log(nombre);
}

console.log(nombre);

// Implementaciones con let ES6 - Explique su ambito
console.log('Trabajando con LET');
let nombre2 = 'Dennis'

console.log(nombre2);

if (true) {
    let nombre2 = 'Richie'
    console.log(nombre2);
}

console.log(nombre2);

// Implementacion de CONST - Explique su ambito
console.log('uso de constantes');

const nombre3 = 'Wozniak'
console.log(nombre3);


if (true) {
    const nombre3 = 'Pedro'

    console.log(nombre3);
}

console.log(nombre3);