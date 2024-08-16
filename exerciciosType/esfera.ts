import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const R = parseFloat(lines[0]);

const pi = 3.14159;

const volume = (4.0 / 3) * pi * Math.pow(R, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);

