function fibs(n) {
    const arr = [];
    let x = 0;
    let y = 1;
    let z;
    arr.push(x, y);
    for (let i = 2; i <= n; i++) {
        z = x + y;
        x = y;
        y = z;
        arr.push(z);
    }
}


function fibsRec(n) {
    if (n === 0) return [0];
    if (n === 1) return [1];

    let fibNumbers = fibsRec(n - 1);

    if (n === 2) {
        fibNumbers.push(1);
    } else {
        fibNumbers.push(fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2]);
    }

    return fibNumbers;
}
