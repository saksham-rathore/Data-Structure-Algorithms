/*
leetcode question

1281. Subtract the Product and Sum of Digits of an Integer
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15

*/ 


// var subtractProductAndSum = function(n) {
//     let sum = 0;
//     let product = 1;

//     while (n > 0) {
//         let digit = n % 10;

//         sum += digit;        // add
//         product *= digit;    // multiply

//         n = Math.floor(n / 10);
//     }

//     return product - sum;
// };

// subtractProductAndSum(45678);





/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let number = 234;
    let sums = [];

    while (n < 0) {
        let sum = number % 10
        sums.push(sum);
        number = Math.floor(number / 10)
        console.log(sums);
    }
};