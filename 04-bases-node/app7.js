const {crearArchivo} = require('./helpers/multiplicar3');

console.clear();

//Imprime los procesos que vienen de la consola
console.log(process.argv);

//Capturando el tercer argumento, se ingresa en consola node app7 --base=5
//Ingrese en consola node app7
const[, , arg3='base=5'] = process.argv;
const[, base=5] = arg3.split('=');
console.log(base);
//Se puede aprobar sin argumentos node app7