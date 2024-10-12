const { crearArchivo } = require('./helpers/multiplicar5');
const colors = require('colors');
const argv = require('./config/yargs3'); 
console.clear();  
console.log(argv);  
crearArchivo(argv.b, argv.h, argv.i, argv.l)
    .then(crearArchivo => {
        // Mensaje en consola después de que el archivo ha sido creado
        console.log('--------------------------------------------'.green); // Línea colorida
        console.log(`  ${crearArchivo.rainbow} `.bold);  // Texto con efecto rainbow y negrita
        console.log('--------------------------------------------'.green); // Línea colorida
    })
    .catch(err => console.log(err.red));  // Mostrar el error en rojo si algo sale mal
