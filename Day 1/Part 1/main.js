"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var data = fs_1.readFileSync('input').toString();
var nums = data.split('\n').map(function (num) { return parseInt(num); }).sort();
var total = 2020;
var answer;
nums.map(function (num, i) {
    nums.map(function (num2, i2) {
        if (i2 > i && num + num2 === total)
            answer = num * num2;
        if (i2 >= i && num + num2 > total)
            return;
    });
});
console.log('', answer);
