var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Convertendo as linhas de entrada para números inteiros
var A = parseInt(lines[0]);
var B = parseInt(lines[1]);
var C = parseInt(lines[2]);
var D = parseInt(lines[3]);

// Verificando as condições
if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}