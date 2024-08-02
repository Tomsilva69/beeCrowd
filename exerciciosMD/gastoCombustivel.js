var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var tempoGasto = parseInt(lines[0]);
var velocidadeMedia = parseInt(lines[1]);


var distanciaPercorrida = tempoGasto * velocidadeMedia;


var Combustivel = distanciaPercorrida / 12;

