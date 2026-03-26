const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("Enter value: ", (answer) => {
    let n = Number(answer);

    let row = 1;

    while (row <= n) {
        let col = 1;

        while (col <= row) {
            process.stdout.write(col + " ");
            col = col + 1;
        }

        console.log();
        row = row + 1;
    }

    r1.close();
});