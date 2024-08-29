import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const teamMembers = {
    1: 'Rolien',   // Elogios
    2: 'Naej',     // Bugs
    3: 'Elehcim',  // Dúvidas
    4: 'Odranoel'  // Sugestões
};

let index = 0;

const N = parseInt(lines[index++]);

for (let i = 0; i < N; i++) {
    const K = parseInt(lines[index++]);

    for (let j = 0; j < K; j++) {
        const feedbackType = parseInt(lines[index++]);
        console.log(teamMembers, [feedbackType]);
    }
}