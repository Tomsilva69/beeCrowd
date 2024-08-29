import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

// Função para calcular o número de movimentos necessários
function calculateMoves(S: string, T: string): number {
    let moves = 0;
    let inSegment = false;

    for (let i = 0; i < S.length; i++) {
        if (S[i] !== T[i]) {
            if (!inSegment) {
                // Encontrou o início de um novo segmento de diferença
                moves++;
                inSegment = true;
            }
        } else {
            // Fim do segmento de diferença
            inSegment = false;
        }
    }

    return moves;
}

// Processar cada linha de entrada
for (const line of lines) {
    if (line.trim() === '* *') break;

    const [S, T] = line.trim().split(' ');
    if (S && T) {
        const result = calculateMoves(S, T);
        console.log(result);
    }
}
