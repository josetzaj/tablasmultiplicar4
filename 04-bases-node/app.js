let base = 5;
console.clear();

const table = (base) => {
    let resultado = '';
    console.log(`---- Tabla del ${base} -----`);
    for (let i = 1; i <= 10; i++) {
        resultado = resultado + `${base} x ${i} = ${base * i}\n`;
        
    }

    return resultado;
}

console.log(table(base));