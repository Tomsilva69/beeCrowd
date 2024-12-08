import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

// Convertendo as linhas de entrada para números inteiros
const A: number = parseInt(lines[0]);
const B: number = parseInt(lines[1]);

// Calculando o produto
const PROD: number = A * B;

// Exibindo o resultado no formato especificado
console.log(`PROD = ${PROD}`);
