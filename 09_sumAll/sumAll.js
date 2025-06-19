const sumAll = function(num1, num2) {

    test1 = num1 < 0 || num2 < 0;  
    test2 = (typeof num1) !== "number" || (typeof num2) !== "number";
    test3 = num1 % 1 !== 0 || num2 % 1 !== 0;
    if (test1 === true || test2 === true || test3 === true) {
        return "ERROR"
    }


    bigNumber = Math.max(num1, num2);
    smallNumber = Math.min(num1, num2);
    sum = 0;
    while (bigNumber >= smallNumber) {
        sum += bigNumber;
        bigNumber--;
    }
    return sum
};


// Do not edit below this line
module.exports = sumAll;
