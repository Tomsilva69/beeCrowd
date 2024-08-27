var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines[0].split(' ').map(Number);

let totalMinutosInicial = horaInicial * 60 + minutoInicial;
let totalMinutosFinal = horaFinal * 60 + minutoFinal;

let duracaoMinutos;

if (totalMinutosInicial < totalMinutosFinal) {
    duracaoMinutos = totalMinutosFinal - totalMinutosInicial;
} else {
    duracaoMinutos = (24 * 60 - totalMinutosInicial) + totalMinutosFinal;
}

let duracaoHoras = Math.floor(duracaoMinutos / 60);
let duracaoMin = duracaoMinutos % 60;

console.log(`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMin} MINUTO(S)`);
