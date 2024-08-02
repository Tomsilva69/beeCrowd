var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);

var pesoA = 3.5;
var pesoB = 7.5;

var MEDIA = ((A * pesoA) + (B * pesoB)) / (pesoA + pesoB);

console.log("MEDIA = " + MEDIA.toFixed(5));