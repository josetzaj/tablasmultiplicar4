// Importar el módulo 'yargs' para manejar argumentos de línea de comandos
const argv = require('yargs')
    .option('b', {
        alias: 'base',  // Alias para la opción base
        type: 'number',  // Tipo de dato que se espera (número)
        demandOption: true,  // Hace que esta opción sea obligatoria
        describe: 'Tabla inicial de multiplicar (por ejemplo, --b 1 para empezar en la tabla del 1)'
    })
    .option('h', {
        alias: 'hasta',  // Alias para la opción hasta
        type: 'number',  // Tipo de dato que se espera (número)
        default: 10,  // Límite por tabla, valor predeterminado es 10
        describe: 'Número hasta donde llega cada tabla (por ejemplo, --h 10 para 1 x 10)'
    })
    .option('i', {
        alias: 'limite',  // Alias para la opción límite
        type: 'number',  // Tipo de dato que se espera (número)
        default: 20,  // Número de tablas, valor predeterminado es 20
        describe: 'Número de tablas a mostrar (por ejemplo, --i 20 para mostrar tablas del 1 al 20)'
    })
    .option('l', {
        alias: 'listar',  // Alias para la opción listar
        type: 'boolean',  // Tipo de dato que se espera (booleano)
        default: false,  // Mostrar en consola, valor predeterminado es false
        describe: 'Muestra las tablas en consola si es true'
    })
    .check((argv, options) => {
        // Validaciones de las opciones proporcionadas por el usuario
        if (isNaN(argv.b) || argv.b <= 0) {
            throw 'La base tiene que ser un número mayor que 0';  // Mensaje de error si la base es inválida
        }
        if (isNaN(argv.h) || argv.h <= 0) {
            throw 'El valor "hasta" tiene que ser un número mayor que 0';  // Mensaje de error si hasta es inválido
        }
        if (isNaN(argv.i) || argv.i <= 0) {
            throw 'El límite tiene que ser un número mayor que 0';  // Mensaje de error si el límite es inválido
        }
        return true;  // Devuelve verdadero si todas las validaciones pasan
    })
    .argv;  // Guarda los argumentos en la variable argv

// Exportar argv para que pueda ser utilizado en otros módulos
module.exports = argv;
