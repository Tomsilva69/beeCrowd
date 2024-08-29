import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
let N = parseInt(input);

// Pré-calcular os fatoriais até o maior possível dentro do limite
let factorials: number[] = [];
let factorial = 1;
for (let i = 1; factorial <= N; i++) {
    factorial *= i;
    factorials.push(factorial);
}

// Agora vamos usar uma abordagem gulosa para encontrar o número mínimo de fatoriais
let count = 0;
for (let i = factorials.length - 1; i >= 0; i--) {
    while (N >= factorials[i]) {
        N -= factorials[i];
        count++;
    }
}

console.log(count);