"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
;
var data = fs_1.readFileSync('input').toString();
var nums = data.split('\n').map(function (num) { return parseInt(num); }).sort();
var total = 2020;
var sumnums = [];
var answer;
nums.map(function (num) { return sumnums.push({ val: num }); });
nums.map(function (num, i) {
    nums.map(function (num2, i2) {
        if (i2 > i)
            sumnums.push({ val: num + num2, num1: num, num2: num2 });
    });
});
nums.map(function (num, i) {
    sumnums.map(function (num2, i2) {
        if (i2 > i && num2.num1 && num2.num2 && num + num2.val === total)
            answer = num2.num1 * num2.num2 * num;
    });
});
console.log('', answer);
