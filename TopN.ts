import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const K = parseInt(input.trim());

if (K === 1) {
    console.log("Top 1");
} else if (K <= 3) {
    console.log("Top 3");
} else if (K <= 5) {
    console.log("Top 5");
} else if (K <= 10) {
    console.log("Top 10");
} else if (K <= 25) {
    console.log("Top 25");
} else if (K <= 50) {
    console.log("Top 50");
} else if (K <= 100) {
    console.log("Top 100");
}
