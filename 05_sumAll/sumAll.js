const sumAll = function (num_1, num_2) {
    let sum = 0;
    if (typeof num_1 !== 'number' || typeof num_2 !== 'number' || num_1 < 0 || num_2 < 0) {
        return "ERROR";
    }
    if (num_1 < num_2) {
        for (let i = num_1; i <= num_2; i++) {
            sum += i;
        }
    } else if (num_1 > num_2) {
        for (let i = num_2; i <= num_1; i++) {
            sum += i;
        }
    } else {
        sum = num_1 + num_2;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
