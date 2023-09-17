const sumAll = function(firstNum, lastNum) {
    let sum = 0;

    // handling negative numbers
    if (firstNum < 0 || lastNum < 0) {
        return 'ERROR';
    }

    // handling non-numbers
    if (typeof firstNum != 'number' || typeof lastNum != 'number') {
        return 'ERROR';
    }

    if (firstNum > lastNum) {
        [firstNum, lastNum] = [lastNum, firstNum]; // swap variable values with destructuring assignment
    }
    for (let i = firstNum; i <= lastNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
