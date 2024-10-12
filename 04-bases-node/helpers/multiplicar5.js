const fs = require('fs');
const colors = require('colors');
const PDFDocument = require('pdfkit');

const crearArchivo = async (base, hasta, limite, listar) => {
    try {
        let salida = '';
        const doc = new PDFDocument();
        const pdfPath = `./output/tabla-${base}-al-${limite}.pdf`;
        doc.pipe(fs.createWriteStream(pdfPath));

        // Título en el PDF
        doc.fontSize(20).fillColor('blue').text(`Tablas de multiplicar del ${base} al ${limite}`, { align: 'center' });
        doc.moveDown();

        // Encabezado en consola
        if (listar) {
            console.log('======================================'.rainbow);
            console.log(`   Tablas de multiplicar del ${base} al ${limite}`.bold.blue);
            console.log('======================================'.rainbow);
        }

        // Generar las tablas
        for (let b = base; b <= limite; b++) {
            salida += `===========================\n   Tabla del: ${b}\n===========================\n`.brightGreen;
            console.log('======================================'.rainbow);
            doc.fontSize(16).fillColor('green').text(`Tabla del ${b}`, { underline: true });

            for (let i = 1; i <= hasta; i++) {
                const resultado = `${b} x ${i} = ${b * i}`;
                salida += `${resultado}\n`.yellow;

                doc.fontSize(14).fillColor('black').text(resultado);  // Añadir el resultado al PDF
            }
            salida += '\n';
            doc.moveDown();

            // Mostrar en consola
            if (listar) {
                
                console.log(`   Tabla del ${b}`.underline.blue);  // Encabezado de la tabla
                for (let i = 1; i <= hasta; i++) {
                    const resultado = `${b} x ${i} = ${b * i}`;
                    console.log(resultado.green);  // Mostrar los resultados en verde
                }
                console.log('======================================'.rainbow);
            }
        }

        doc.end();

        return `Archivo PDF creado: tabla-${base}-al-${limite}.pdf`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
