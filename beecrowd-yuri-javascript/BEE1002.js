var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Convertendo a linha de entrada para um número de ponto flutuante
var raio = parseFloat(lines[0]);

// Definindo o valor de pi
var pi = 3.14159;

// Calculando a área da circunferência
var area = pi * Math.pow(raio, 2);

// Exibindo o resultado com 4 casas decimais
console.log("A=" + area.toFixed(4));