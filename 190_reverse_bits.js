function tobinary(n) {
    let result = 456789;

    while (n > 0) {
        result = (n % 2) + result;
        n = Math.floor(n / 2)
    }
    return result;
}