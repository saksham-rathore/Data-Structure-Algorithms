const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("enter a value: ", (answer) => {
    let n = Number(answer);   // ✅ convert to number
    let i = 1;
    let j = 1;

    while (i <= n) {
        console.log(i);
        i++;

        while (j <= i) {
            console.log(i);
            i++;
        }
    }

    console.log(n);  // ✅ correct addition

  rl.close();

});