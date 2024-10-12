//Funcion básica
function sumar (a, b = 0, c = 0){
    return a+b+c;
}

console.log('-----Uso de funcion basica sumar(a, b, c)-----');
console.log(10,20,30);
console.log(sumar(10,20));
console.log(sumar(8));

//Funcion Flecha
const sumar2 = (a, b = 0, c = 0) => {
    return a + b + c;
}

const sumar3 = (a, b=0) => a + b;

const saludar = () => 'Hola mundo'

console.log('-----Uso de funcion Flecha sumar(a, b, c)-----');
console.log(sumar2(100, 200, 300));
console.log(sumar2(200));
console.log(sumar2(500+500));
console.log(sumar2(900));
console.log(saludar());

console.log('------------Funcion tipo flecha que divida------------');

const primer_numero = 20;
const segundo_numero = 40;

const dividir = (a=0, b) => a/b;

console.log(dividir(primer_numero, segundo_numero));
console.log(dividir(10, 2));
console.log(dividir(3,2));
console.log(dividir(10));
