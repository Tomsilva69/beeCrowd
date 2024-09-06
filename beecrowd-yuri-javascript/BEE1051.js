var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var salario = parseFloat(input.trim());

let imposto = 0;

if (salario <= 2000.00) {
    console.log("Isento");
} else if (salario <= 3000.00) {
    imposto = (salario - 2000.00) * 0.08;
} else if (salario <= 4500.00) {
    imposto = (1000.00 * 0.08) + ((salario - 3000.00) * 0.18);
} else {
    imposto = (1000.00 * 0.08) + (1500.00 * 0.18) + ((salario - 4500.00) * 0.28);
}

if (imposto > 0) {
    console.log(`R$ ${imposto.toFixed(2)}`);
}