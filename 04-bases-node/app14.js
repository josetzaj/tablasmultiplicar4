const {crearArchivo} = require('./helpers/multiplicar4')
const argv = require('./config/yargs2')

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
                .then(crearArchivo => console.log(crearArchivo, 'creado'))
                .catch(err => console.log(err))