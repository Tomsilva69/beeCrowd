import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let index: number = 0;
while (true) {
    const N: number = parseInt(lines[index]);
    if (N === 0) break;
    
    let pointsPlayer1: number = 0;
    let pointsPlayer2: number = 0;
    
    for (let i = 1; i <= N; i++) {
        const [A, B]: number[] = lines[index + i].split(' ').map(Number);
        
        if (A > B) {           
            pointsPlayer1++;

        } else if (B > A) {
            pointsPlayer2++;
            
        }
    }
    
    console.log(`${pointsPlayer1} ${pointsPlayer2}`);
    index += N + 1;
}
