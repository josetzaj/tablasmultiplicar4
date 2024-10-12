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

console.log(argv);

crearArchivo(argv.b)
                .then(crearArchivo => console.log(crearArchivo, 'creado'))
                .catch(err => console.log(err))