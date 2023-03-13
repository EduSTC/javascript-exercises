const palindromes = function (text) {
    let newText = text.toLowerCase().replace(/[^a-z]/g, "").trim();
    return newText.split("").reverse().join("") === newText;
};

// Do not edit below this line
module.exports = palindromes;
