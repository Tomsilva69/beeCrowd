import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function somarSemCarry(a: number, b: number): number {
    return a ^ b; // XOR entre os dois números, que simula a soma sem carry
}

lines.forEach(line => {
    if (line.trim() === '') return;

    const [aStr, bStr] = line.split(' ');
    const a = parseInt(aStr, 10);
    const b = parseInt(bStr, 10);

    const resultado = somarSemCarry(a, b);

    console.log(resultado);
});