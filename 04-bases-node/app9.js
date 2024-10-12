const {crearArchivo} = require("./helpers/multiplicar3")

const argv = require('yargs').argv; //Requermos YARGS

console.clear();

console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.base);