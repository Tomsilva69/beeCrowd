import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let [A, B, C]: number[] = lines[0].split(' ').map(Number);

// Ordena os lados em ordem decrescente
let sides: number[] = [A, B, C].sort((a, b) => b - a);
A = sides[0];
B = sides[1];
C = sides[2];

// Verifica os tipos de triângulo
if (A >= B + C) {
    console.log('NAO FORMA TRIANGULO');
} else {
    if (A * A === B * B + C * C) {
        console.log('TRIANGULO RETANGULO');
    }
    if (A * A > B * B + C * C) {
        console.log('TRIANGULO OBTUSANGULO');
    }
    if (A * A < B * B + C * C) {
        console.log('TRIANGULO ACUTANGULO');
    }
    if (A === B && B === C) {
        console.log('TRIANGULO EQUILATERO');
    } else if (A === B || B === C || A === C) {
        console.log('TRIANGULO ISOSCELES');
    }
}
