const removeFromArray = function() {
    const arrayArgument = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arrayArgument.length; j++) {
            if (arguments[i] === arrayArgument[j]) {
                arrayArgument.splice(j, 1);
            }
        }
    }
    return arrayArgument;
};

// Do not edit below this line
module.exports = removeFromArray;
