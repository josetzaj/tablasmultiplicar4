const {crearArchivo} = require('./helpers/multiplicar2');

console.clear();

const base = 31;

crearArchivo(base)
    .then(crearArchivo => console.log(crearArchivo, 'creado'))
    .catch(err => console.log(err))