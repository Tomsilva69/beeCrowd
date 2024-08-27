var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Lê os valores A, B e C
let [A, B, C] = lines[0].split(' ').map(Number);

// Função para verificar se pode formar um triângulo
function formaTriangulo(a, b, c) {
    return (a < b + c && b < a + c && c < a + b);
}

// Se pode formar um triângulo, calcula o perímetro
if (formaTriangulo(A, B, C)) {
    let perimetro = A + B + C;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    // Se não, calcula a área do trapézio
    let area = ((A + B) * C) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}
