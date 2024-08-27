import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

// Lê os valores A, B e C
const [A, B, C]: number[] = lines[0].split(' ').map(Number);

// Função para verificar se pode formar um triângulo
function formaTriangulo(a: number, b: number, c: number): boolean {
    return (a < b + c && b < a + c && c < a + b);
}

// Se pode formar um triângulo, calcula o perímetro
if (formaTriangulo(A, B, C)) {
    const perimetro: number = A + B + C;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    // Se não, calcula a área do trapézio
    const area: number = ((A + B) * C) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}
