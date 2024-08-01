var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Convertendo as linhas de entrada para números inteiros
var A = parseInt(lines[0]);
var B = parseInt(lines[1]);

// Calculando o produto
var PROD = A * B;

// Exibindo o resultado no formato especificado
console.log("PROD = " + PROD);