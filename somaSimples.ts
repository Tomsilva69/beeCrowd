import * as fs from 'fs';

let input: string = fs.readFileSync('/dev/stdin', 'utf8');
let lines: string[] = input.split('\n');

let A: number = parseInt(lines[0]);
let B: number = parseInt(lines[1]);

let Soma: number = A + B;

console.log("SOMA = " + Soma);