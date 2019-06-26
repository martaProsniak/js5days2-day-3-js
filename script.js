function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'Enter valid number!'
    }

    return x + y;
}

function multiply(a, b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Enter valid number!'
    }
    return a * b;
}

function square (a) {
    return multiply(a, a);
}
