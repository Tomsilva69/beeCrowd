import * as fs from 'fs';

const input: string = fs.readFileSync('/dev/stdin', 'utf8');
const lines: string[] = input.split('\n');

const [A, B, C, D]: number[] = lines[0].split(' ').map(Number);

if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0  && A % 2 === 0) {
    console.log("valores aceitos");

}   else {
    console.log("Valores nao aceitos");
}