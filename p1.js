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

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter value: ", (answer) => {
  let n = Number(answer);
  function reverseNumber(n) {
    let reverse = 0;

    while (n > 0) {
      let digit = n % 10;
      reverse = reverse * 10 + digit;
      n = Math.floor(n / 10);
    }

    return reverse;
  }

  console.log(reverseNumber(n)); // 321

  r1.close();
});
