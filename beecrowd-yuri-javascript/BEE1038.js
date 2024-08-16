var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines =input.split('\n');
// tabela de preços
const precos = {
    1: 4.00, // CACHORRO QUENTE
    2: 4.50, // X-SALADA
    3: 5.00, // X-BACON
    4: 2.00, // TORRADA SIMPLES
    5: 1.50, // REFRIGERANTE
};
// le o codigo e a quantidade
const [codigo, quantidade] = lines[0].split(' ').map(Number);

// calcula o total
const total = precos[codigo] * quantidade;

// exibe o resultado formatado
console.log(`Total: R$ ${total.toFixed(2)}`);