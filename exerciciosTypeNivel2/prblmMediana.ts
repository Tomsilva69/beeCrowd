import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let index = 0;

while (true) {
    const [A, B] = lines[index].split(' ').map(Number);
    index++;

    if (A === 0 && B === 0) break;

    const C = 2 * B - A;
    
    if (C < B) {
        console.log(B);
    } else {
        console.log(C);
    }
    
}