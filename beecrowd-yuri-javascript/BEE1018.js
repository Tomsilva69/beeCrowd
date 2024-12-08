var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

var valorOriginal = N;

var notas100 = 0, notas50 = 0, notas20 = 0, notas10 = 0, notas5 = 0, notas2 = 0, notas1 = 0;

notas100 = Math.floor(N / 100);
N %= 100;

notas50 = Math.floor(N / 50);
N %= 50;

notas20 = Math.floor(N / 20);
N %= 20;

notas10 = Math.floor(N / 10);
N %= 10;

notas5 = Math.floor(N / 5);
N %= 5;

notas2 = Math.floor(N / 2);
N %= 2;

notas1 = N;

// Exibindo o resultado
console.log(valorOriginal);
console.log(notas100 + " nota(s) de R$ 100,00");
console.log(notas50 + " nota(s) de R$ 50,00");
console.log(notas20 + " nota(s) de R$ 20,00");
console.log(notas10 + " nota(s) de R$ 10,00");
console.log(notas5 + " nota(s) de R$ 5,00");
console.log(notas2 + " nota(s) de R$ 2,00");
console.log(notas1 + " nota(s) de R$ 1,00");