import { readFileSync } from 'fs';

const data: String = readFileSync('input').toString();
const nums: Array<number> = data.split('\n').map((num) => parseInt(num)).sort();
const total: number = 2020;
let answer: number;

nums.map((num: number, i: number) => {
    nums.map((num2: number, i2: number) => {
        if (i2 > i && num + num2 === total)
            answer = num * num2;
        if (i2 >= i && num + num2 > total)
            return;
    });
});

console.log('', answer);