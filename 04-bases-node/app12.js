const {crearArchivo} = require('./helpers/multiplicar4')
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv

console.clear();

console.log(argv);

//Se envian dos argumentos el valor de base que es numérico y listar que es booleano
crearArchivo(argv.b, argv.l)
                .then(crearArchivo => console.log(crearArchivo, 'creado'))
                .catch(err => console.log(err));

