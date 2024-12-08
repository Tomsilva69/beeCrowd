import * as fs from 'fs';

var input: string= fs.readFileSync('/dev/stdin', 'utf8');
var lines: string[]= input.split('\n');

console.log("Hello World!"); 