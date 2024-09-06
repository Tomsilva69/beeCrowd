// Entrada simulada
// Exercicio não resolvido
var input = `Dia 5\n08 : 12 : 23\nDia 9\n06 : 13 : 23`;
var lines = input.split('\n');


function tempoEmSegundos(hora, minuto, segundo) {
    return segundo + minuto * 60 + hora * 3600;
}

// Ler os dados de entrada
var inicioDia = parseInt(lines[0].split(' ')[1]);
var inicioHora = lines[1].split(' : ').map(Number);

var fimDia = parseInt(lines[2].split(' ')[1]);
var fimHora = lines[3].split(' : ').map(Number);


var inicioTotalSegundos = tempoEmSegundos(inicioHora[0], inicioHora[1], inicioHora[2]);
var fimTotalSegundos = tempoEmSegundos(fimHora[0], fimHora[1], fimHora[2]);


var duracaoEmSegundos = fimTotalSegundos - inicioTotalSegundos;


var dias = fimDia - inicioDia;
duracaoEmSegundos %= 86400;

var horas = Math.floor(duracaoEmSegundos / 3600);
duracaoEmSegundos %= 3600;

var minutos = Math.floor(duracaoEmSegundos / 60);
var segundos = duracaoEmSegundos % 60;


console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);
