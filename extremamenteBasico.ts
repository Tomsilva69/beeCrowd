import * as fs from 'fs';

var input: string= fs.readFileSync('/dev/stdin', 'utf8');
var lines: string[]= input.split('\n');

var A: number= parseInt(lines[0]);
var B: number= parseInt(lines[1]);

var X: number= A + B;






