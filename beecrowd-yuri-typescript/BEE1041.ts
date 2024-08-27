import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const coords = lines[0].split(" ");
const x: number = parseFloat(coords[0]);
const y: number = parseFloat(coords[1]);

if (x === 0 && y === 0) {
    console.log("Origem");
} else if (x === 0) {
    console.log("Eixo Y");
} else if (y === 0) {
    console.log("Eixo X");
} else if (x > 0 && y > 0) {
    console.log("Q1");
} else if (x < 0 && y > 0) {
    console.log("Q2");
} else if (x < 0 && y < 0) {
    console.log("Q3");
} else if (x > 0 && y < 0) {
    console.log("Q4");
}
