var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeroFuncionario = parseInt(lines[0]);
var horasTrabalhadas = parseInt(lines[1]);
var valorPorHora = parseFloat(lines[2]);

var salario = horasTrabalhadas * valorPorHora;

console.log('NUMBER = ' + numeroFuncionario);
console.log('SALARY = U$ ' + salario.toFixed(2));