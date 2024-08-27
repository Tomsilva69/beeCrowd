import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let [horaInicial, minutoInicial, horaFinal, minutoFinal]: number[] = lines[0].split(' ').map(Number);

let totalMinutosInicial: number = horaInicial * 60 + minutoInicial;
let totalMinutosFinal: number = horaFinal * 60 + minutoFinal;

let duracaoMinutos: number;

if (totalMinutosInicial < totalMinutosFinal) {
    duracaoMinutos = totalMinutosFinal - totalMinutosInicial;
} else {
    duracaoMinutos = (24 * 60 - totalMinutosInicial) + totalMinutosFinal;
}

let duracaoHoras: number = Math.floor(duracaoMinutos / 60);
let duracaoMin: number = duracaoMinutos % 60;

console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMin} MINUTO(S)`);
