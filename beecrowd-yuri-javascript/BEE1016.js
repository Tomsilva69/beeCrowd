var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distancia = parseInt(lines[0]);

var tempo = distancia * 2;

console.log(tempo + " minutos");