import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

// Leitura da entrada
const N = parseInt(lines[0].trim());
const [LA, LB] = lines[1].trim().split(' ').map(Number);
const [SA, SB] = lines[2].trim().split(' ').map(Number);

// Verifica se é possível lavar e secar as peças
if (N >= LA && N <= LB && N >= SA && N <= SB) {
    console.log("possivel");
} else {
    console.log("impossivel");
}
