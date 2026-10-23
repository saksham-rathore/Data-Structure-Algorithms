/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
 
*/

// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var multiply = function(num1, num2) {


// };

const num1 = "123";
const num2 = "456";

const a = Number(num1[0])
const b = Number(num2[0])

const total = a * b;

const digit = total % 10;
const carry = Math.floor(total / 10);

const str = carry.toString();

console.log(str)