function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'Enter valid number!'
    }

    return x + y;
}

function multiply(a, b) {
    let sum = 0;

    for (let i = 0; i < b; i++) {
        sum = add(sum, a);
    }
    return sum;
}

function square(a) {
    return multiply(a, a);
}
