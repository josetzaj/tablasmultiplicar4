const {crearArchivo} = require("./helpers/multiplicar3")
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true                  
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        //Nan = Not a Number
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv

console.clear();

console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.b);