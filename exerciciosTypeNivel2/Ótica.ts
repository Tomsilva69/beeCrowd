import * as fs from 'fs';

// Função para processar uma linha de entrada de questões
function processQuestion(values: number[]): string {
    const threshold = 127;
    const marked = values.map(v => v <= threshold ? 1 : 0);
    
    // Conta o número de 1s na lista 'marked'
    const markedCount = marked.reduce((acc: number, curr: number) => acc + curr, 0);

    if (markedCount === 1) {
        return String.fromCharCode('A'.charCodeAt(0) + marked.indexOf(1));
    } else {
        return '*';
    }
}

// Função principal
function main() {
    const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    let index = 0;

    while (index < input.length) {
        const numQuestions = parseInt(input[index], 10);
        index++;
        if (numQuestions === 0) break;

        for (let i = 0; i < numQuestions; i++) {
            const values = input[index].split(' ').map(Number);
            console.log(processQuestion(values));
            index++;
        }
    }
}

main();