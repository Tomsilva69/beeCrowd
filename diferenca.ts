import * as fs from 'fs';

let input: string = fs.readFileSync('/dev/stdin', 'utf8');
let lines: string[] = input.split('\n');

let A: number = parseInt(lines[0]);
let B: number = parseInt(lines[1]);
let C: number = parseInt(lines[2]);
let D: number = parseInt(lines[3]);

let DIFERENCA: number = (A * B - C * D);

console.log("DIFERENCA = " + DIFERENCA);