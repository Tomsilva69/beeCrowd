var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var point1 = lines[0].split(' ').map(Number);
var point2 = lines[1].split(' ').map(Number);

var x1 = point1[0];
var y1 = point1[1];
var x2 = point2[0];
var y2 = point2[1];


var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));


console.log(distance.toFixed(4));