/**
 * @param {number} num
 * @return {number}
 */
function digitSum(num) {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }
    return sum;
}

let countEven = function (num) {
    let count = 0;
    for (let n = 1; n <= num; n++) {
        count += digitSum(n) % 2 === 0;
    }
    return count;
};