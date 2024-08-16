import * as fs from 'fs';

// Tabela de preços
const precos: { [key: number]: number } = {
    1: 4.00,   // CACHORRO QUENTE
    2: 4.50,   // X-SALADA
    3: 5.00,   // X-BACON
    4: 2.00,   // TORRADA SIMPLES
    5: 1.50    // REFRIGERANTE
};

// Lê o arquivo de entrada
const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

// Lê o código e a quantidade
const [codigo, quantidade] = lines[0].split(' ').map(Number);

// Verifica se o código é válido
if (precos[codigo]) {
    // Calcula o total
    const total = precos[codigo] * quantidade;

    // Exibe o resultado formatado
    console.log(`Total: R$ ${total.toFixed(2)}`);
} else {
    console.log('Código inválido');
}