import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

// Convertendo as entradas para os tipos apropriados
const employeeNumber: number = parseInt(lines[0]);
const hoursWorked: number = parseInt(lines[1]);
const hourlyRate: number = parseFloat(lines[2]);

// Calculando o salário
const salary: number = hoursWorked * hourlyRate;

// Exibindo o resultado no formato especificado
console.log(`NUMBER = ${employeeNumber}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);