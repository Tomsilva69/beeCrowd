import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
const lines = input.split('\n');

// Leitura dos dados
const Q = parseInt(lines[0].trim());
const opinions = lines[1].trim().split(' ').map(Number);

// Contagem de opiniões
const countSatisfactory = opinions.filter(opinion => opinion === 0).length;

// Verificar se a maioria está satisfeita
if (countSatisfactory > Q / 2) {
    console.log("Y");
} else {
    console.log("N");
}