//Esto es una función de tipo flecha asignada a una constante
const saludar = (nombre) =>{
    return `Saludos ${ nombre }`; //backtics
}

console.log(saludar('Josue'));
console.log("Hola Mundo");

/*----------------------------------------*/
const sumar = (primer_numer, segundo_numero) => {
    return primer_numer + segundo_numero;
}

console.log('El resultado de utilizar la funcion sumar es: ', sumar(10, 100));