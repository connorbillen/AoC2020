import { readFileSync } from 'fs';

interface Sumnum {
    val: number,
    num1?: number,
    num2?: number
};
const data: String = readFileSync('input').toString();
const nums: Array<number> = data.split('\n').map((num) => parseInt(num)).sort();
const total: number = 2020;
const sumnums: Array<Sumnum> = [];
let answer: number;

nums.map((num: number) => sumnums.push({ val: num }));
nums.map((num: number, i: number) => {
    nums.map((num2: number, i2: number) => {
        if (i2 > i)
            sumnums.push({ val: num + num2, num1: num, num2: num2 });
    });
});

nums.map((num: number, i: number) => {
    sumnums.map((num2: Sumnum, i2: number) => {
        if (i2 > i && num2.num1 && num2.num2 && num + num2.val === total)
            answer = num2.num1 * num2.num2 * num;
    });
});

console.log('', answer);