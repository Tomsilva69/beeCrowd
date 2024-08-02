var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var raio = parseFloat(lines[0]);


var pi = 3.14159;


var area = pi * Math.pow(raio, 2);


console.log("A=" + area.toFixed(4));