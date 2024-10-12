const{crearArchivo} = require('./helpers/multiplicar3');

console.clear();

const base = 2;

crearArchivo(base)
    .then(crearArchivo => console.log(crearArchivo, 'creado'))
    .catch(err => console.log(err))