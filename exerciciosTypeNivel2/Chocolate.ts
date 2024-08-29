import * as fs from 'fs';

const input: string = fs.readFileSync('/dev/stdin', 'utf8');
const lines: string[] = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    const [A, B, C]: number[] = lines[i].split(' ').map(Number);

    if (A === 0 && B === 0 && C === 0) break;

    const volume: number = A * B * C;
    const arestaCubo: number = Math.floor(Math.cbrt(volume));

    console.log(arestaCubo);
}