import * as fs from 'fs';

var input = fs.readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var diameter: number = parseInt(lines[0]);


var dimensions: number[] = lines[1].split(' ').map(Number);
var height: number = dimensions[0];
var width: number = dimensions[1];
var depth: number = dimensions[2];


if (diameter <= height && diameter <= width && diameter <= depth) {
    console.log('S');
} else {
    console.log('N');
}