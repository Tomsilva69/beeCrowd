import * as fs from 'fs';

let input: string = fs.readFileSync('/dev/stdin', 'utf8');
let lines: string[] = input.split('\n');

let A: number = parseFloat(lines[0]);
let B: number = parseFloat(lines[1]);

let pesoA: number = 3.5;
let pesoB: number = 7.5;

let MEDIA: number = ((A * pesoA) + (B * pesoB)) / (pesoA + pesoB);

console.log("MEDIA = " + MEDIA.toFixed(5));