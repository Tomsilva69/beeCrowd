import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
const N = parseInt(input);

for (let i = 2; i <= N; i += 2) {
    console.log(`${i}^2 = ${i * i}`);
}
