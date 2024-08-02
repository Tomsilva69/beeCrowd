var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line1 = lines[0].split(' ');
var codigo1 = parseInt(line1[0]);
var numPecas1 = parseInt(line1[1]);
var valorUnitario1 = parseFloat(line1[2]);


var line2 = lines[1].split(' ');
var codigo2 = parseInt(line2[0]);
var numPecas2 = parseInt(line2[1]);
var valorUnitario2 = parseFloat(line2[2]);

var total = (numPecas1 * valorUnitario1) + (numPecas2 * valorUnitario2);


console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);