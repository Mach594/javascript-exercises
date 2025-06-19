const repeatString = function (string, num) {
    repeatedString = ""
    if (num < 0) {
        return "ERROR"
    }
    while (num > 0) {
        num--;
        repeatedString += string;
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
