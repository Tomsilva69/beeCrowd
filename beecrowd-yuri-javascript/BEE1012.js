var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines[0].split(' ').map(parseFloat);

const PI = 3.14159;

var areaTriangulo = (A * C) / 2;

var areaCirculo = PI * Math.pow(C, 2);

var areaTrapezio = ((A + B) *C) / 2;

var areaQuadrado = B * B;

var areaRetangulo = A * B;

console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));