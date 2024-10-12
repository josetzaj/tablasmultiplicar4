const {crearArchivo} = require('./helpers/multiplicar4')
const colors = require('colors')
const argv = require('./config/yargs2')

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
    .then(crearArchivo => console.log(crearArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))