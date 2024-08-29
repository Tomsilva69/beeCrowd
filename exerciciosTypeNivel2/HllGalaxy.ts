import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let index = 0;

while (true) {
    // Lê o número de mensagens N
    const N = parseInt(lines[index++]);

    if (N === 0) {
        break;
    }

    let earliestYear = Infinity;
    let earliestPlanet = '';

    for (let i = 0; i < N; i++) {
        const [planet, A_str, T_str] = lines[index++].split(' ');
        const A = parseInt(A_str);
        const T = parseInt(T_str);

        // Calcula o ano de envio
        const yearSent = A - T;

        // Verifica se é a mensagem mais antiga
        if (yearSent < earliestYear) {
            earliestYear = yearSent;
            earliestPlanet = planet;
        }
    }

    console.log(earliestPlanet);
}