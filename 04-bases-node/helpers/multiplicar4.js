const fs = require('fs')
const colors = require('colors') //Para usar colors

const crearArchivo = async(base=5, listar=false) => {
    try{
        let salida = '';

        //Generar la tabla de lo que se env[ie ene la base del 1 al 10
        for(let i = 1; i <= 10; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        
        if(listar){
            console.log('===================================='.green);
            console.log('       Table del:'.green, colors.blue(base));
            console.log('===================================='.green);
            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    }catch(err){
        throw err
    }
}

module.exports = {
    crearArchivo
}