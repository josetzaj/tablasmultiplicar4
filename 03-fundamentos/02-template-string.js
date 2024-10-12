// Explique el resultado del siguiente programa
const nombre = 'Batman'
const real = 'Bruce Wane'

const normal = nombre + ' ' + real;

console.log('-------Concatenacion con signo +-------');
console.log(normal);


//${} esto sirve para ejecutar codigo JS dentro de los backtics
const template = `${nombre} ${real}`; //Interpolacion de variables nombre y real

console.log('---------Uso de Template String y Concatenación con signo +')
console.log('normal: ', normal);
console.log('template: ', template);
console.log(normal === template);

//Los backtics tienen un uso multilinea por ejemplo
console.log('----------Uso del Tamplate String----------');
const html = `
<h1>Hola estoy utilizando<h1>
<p> la propiedad multilinea de los template strings <p>
`;

console.log(html);