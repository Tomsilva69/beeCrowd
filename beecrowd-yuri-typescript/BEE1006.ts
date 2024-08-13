import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

// Convertendo as linhas de entrada para números de ponto flutuante
const A: number = parseFloat(lines[0]);
const B: number = parseFloat(lines[1]);
const C: number = parseFloat(lines[2]);

// Definindo os pesos
const pesoA: number = 2;
const pesoB: number = 3;
const pesoC: number = 5;

// Calculando a média ponderada
const media: number = (A * pesoA + B * pesoB + C * pesoC) / (pesoA + pesoB + pesoC);

// Exibindo o resultado no formato especificado
console.log(`MEDIA = ${media.toFixed(1)}`);