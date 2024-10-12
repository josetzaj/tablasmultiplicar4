//Objeto sin refactorizar
const batman = {
    nombre: 'Bruce',
    apellido: 'Wane',
    poder: 'Tecnologia',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

console.log('-----Batman sin refactorizar-----');
console.log(batman.getNombre());

//Objeto sin refactorizado
const batman2 = {
    nombre: 'Bruce2',
    apellido: 'Wane2',
    poder: 'Tecnologia2',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

console.log('-----Sin destructuracion-----');
const nombre2 = batman2.nombre;
const apellido2 = batman2.apellido;
const poder2 = batman2.poder;

console.log(nombre2, apellido2, poder2);

//aplicando destrufcturacion
console.log('-----Con destructuracion-----');
const {nombre, apellido, poder, edad = 40} = batman2;
console.log(nombre, apellido, poder, edad);

console.log('-----Destructuración con funciones-----');

function imprimirHeroe(heroe){
    const{nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad);
}

console.log('imprimiendo funcion Heroes');
imprimirHeroe(batman2);

console.log('-----Destructuración con funciones dentro de sus argumentos-----');

//Destructuración con funciones desde los argumentos
function imprimeHeroe2({nombre, apellido, poder, edad = 0}){
    console.log(nombre, apellido, poder, edad);
}

console.log('imprimiendo funcion Heroes2');
imprimeHeroe2(batman2, batman2.edad = 55);
batman2.edad = 75;
batman2.pasatiempo = 'Nadar';
imprimeHeroe2(batman2);
console.log("Imprimiendo objeto Batman2: ", batman2);

console.log('-----Destructuración desde un arreglo-----');
const heroes = ['Spiderman','Superman','Batman']
const h01 = heroes[0]
const h02 = heroes[1]
const h03 = heroes[2]
console.log('Imprimiendo h01, h02, h03 desde copia de un indice');
console.log(h01, h02, h03);

const [h1, h2, h3] = heroes;
console.log('iimprimiendo h1, h2, h3 desde una destructuracion de todo el arreglo');
console.log(h1,h2,h3);

const [ , , h003] = heroes;
console.log('imiprimiendo h003 como parte de una destruccion de un solo elemento');
console.log(h003);