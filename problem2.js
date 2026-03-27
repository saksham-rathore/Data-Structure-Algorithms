const constants = require("constants");
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("enter the value: ", (answer) => {
  let n = Number(answer);

  let row = 0;
  while (row <= n) {
    col = 1;
    while (col <= n) {
      process.stdout.write(String.fromCharCode(65 + row) + " ");
      col = col + 1;
    }
    console.log();
    row = row + 1;
  }
});