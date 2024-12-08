import * as fs from 'fs';

const input: string = fs.readFileSync('/dev/stdin', 'utf8');
const lines: string[] = input.split('\n');

// Convertendo a linha de entrada para um número de ponto flutuante
const raio: number = parseFloat(lines[0]);

// Definindo o valor de pi
const pi: number = 3.14159;

// Calculando a área da circunferência
const area: number = pi * Math.pow(raio, 2);

// Exibindo o resultado com 4 casas decimais
console.log("A=" + area.toFixed(4));