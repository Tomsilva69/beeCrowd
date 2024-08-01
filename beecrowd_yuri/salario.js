var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var employeeNumber = parseInt(lines[0]);
var hoursWorked = parseInt(lines[1]);
var hourlyRate = parseFloat(lines[2]);

var salary = hoursWorked * hourlyRate;

console.log('NUMBER = ' + employeeNumber);
console.log('SALARY = U$ ' + salary.toFixed(2));