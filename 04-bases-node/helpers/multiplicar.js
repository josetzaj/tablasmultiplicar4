const fs = require('fs');

let base = 5;
let salida = '';

const crearArchivo = (base = 5) => {
    console.clear();
    console.log('====================================');
    console.log(`       Table del: ${base}           `);
    console.log('====================================');

    for(let i = 1; i <= 10; i++){
        salida += `${base} x ${i} = ${base*i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida)

    console.log(`tabla-${base}.txt creado`);

}

module.exports = {
    crearArchivo
}