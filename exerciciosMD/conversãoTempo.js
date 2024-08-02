var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

var horas = Math.floor(N / 3600);
var minutos = Math.floor((N % 3600) / 60);
var segundos = N % 3600 % 60;

console.log(horas + ':' + minutos + ':' + segundos);