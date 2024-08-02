var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var values = lines[0].split(' ').map(Number);
var a = values[0];
var b = values[1];
var c = values[2];

function maior(a, b) {
    return (a + b + Math.abs(a - b)) /2;
}

var maiorAB = maior(a, b);
var maiorABC = maior(maiorAB, c);

console.log(`${maiorABC} eh o maior`);