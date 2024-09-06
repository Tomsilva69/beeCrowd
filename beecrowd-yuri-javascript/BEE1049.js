// Exercicio não resolvido.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let palavra1 = lines[0].trim();
let palavra2 = lines[1].trim();
let palavra3 = lines[2].trim();

let animal = '';

if (palavra1 = 'vertebrado') {  
    if (palavra2 === 'ave') {
        if (palavra3 === 'carnivoro') {
            animal = 'aguia';
        } else if (palavra3 === 'onivoro') {
            animal = 'pomba';
        }
    } else if (palavra2 === 'mamifero') {
        if (palavra3 === 'onivoro') {
            animal = 'homem';
        } else if (palavra3 === 'herbivoro') {
            animal = 'vaca';
        }
    }
} else if (palavra1 === 'invertebrado') {
    if (palavra2 === 'inseto') {
        if (palavra3 === 'hematofago') {
            animal = 'pulga';
        } else if (palavra3 === 'herbivoro') {
            animal = 'lagarta';
        }
    } else if (palavra2 === 'anelideo') {
        if (palavra3 === 'hematofago') {
            animal = 'sanguessuga';
        } else if (palavra3 === 'onivoro') {
            animal = 'minhoca';
        }
    }
}

console.log(animal);