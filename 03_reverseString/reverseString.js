const reverseString = function(string) {
    stringLetters = string.split("");
    let lastIndex = stringLetters.length - 1;
    let reverseString = "";
    for (let i = lastIndex; i >= 0; i--) {
        reverseString += stringLetters[i];
    }

    return reverseString;

};

// Do not edit below this line
module.exports = reverseString;
