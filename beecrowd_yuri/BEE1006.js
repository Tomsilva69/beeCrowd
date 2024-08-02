var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Convertendo as linhas de entrada para números de ponto flutuante
var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

// Definindo os pesos
var pesoA = 2;
var pesoB = 3;
var pesoC = 5;