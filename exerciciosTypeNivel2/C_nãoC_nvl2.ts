
import * as fs from 'fs';

var input = fs.readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function somarSemCarry(a: number, b: number): number {
    return a ^ b; // XOR entre os dois números, que simula a soma sem carry
}

lines.forEach(line => {
    if (line.trim() === '') return;

    var [aStr, bStr] = line.split(' ');
    var a = parseInt(aStr, 10);
    var b = parseInt(bStr, 10);

    var resultado = somarSemCarry(a, b);

    console.log(resultado);
});
