import * as fs from 'fs';

let input: string = fs.readFileSync('/dev/stdin', 'utf8');
let lines: string[] = input.split('\n');

let nome: string = lines[0];

let salarioFixo: number = parseFloat(lines[1]);
let totalVendas: number = parseFloat(lines[2]);

let comissao: number = totalVendas * 0.15;

let totalReceber: number = salarioFixo + comissao;

console.log(`TOTAL = R$ ${totalReceber.toFixed(2)}`);