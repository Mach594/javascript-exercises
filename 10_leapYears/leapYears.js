const leapYears = function(year) {
    if (
        (year % 100 === 0 && year % 400 === 0) === true || 
        (year % 4 === 0 && year % 100 !== 0)  === true
    ) return true;
    return false
};

// Do not edit below this line
module.exports = leapYears;
