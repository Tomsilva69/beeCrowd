import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let index = 0;

while (true) {
    // Lê o número de pessoas que usaram a escada rolante
    const N = parseInt(lines[index++]);

    // Se N for 0, termina o processamento
    if (N === 0) break;

    // Lê os tempos em que as pessoas se aproximaram da escada
    const times = lines[index++].split(' ').map(Number);

    let totalActiveTime = 0;

    if (N > 0) {
        // Inicia com o tempo de ativação da primeira pessoa
        totalActiveTime = 10;
        for (let i = 1; i < N; i++) {
            const currentTime = times[i];
            const previousTime = times[i - 1];

            // Se o tempo atual está dentro do período de ativação anterior, só extendemos o tempo
            if (currentTime < previousTime + 10) {
                totalActiveTime += currentTime - previousTime;
            } else {
                // Se o tempo atual não está dentro do período de ativação, adiciona 10 segundos
                totalActiveTime += 10;
            }
        }
    }

    // Imprime o total de tempo em que a escada rolante ficou ativa
    console.log(totalActiveTime);
}
