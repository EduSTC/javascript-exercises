const fibonacci = function(position) {
    if (position < 0) {
        return "OOPS";
    }
    let a = 0;
    let b = 1;
    for (let i = 0; i < position; i++) {
        temp = a;
        a = a + b;
        b = temp;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
