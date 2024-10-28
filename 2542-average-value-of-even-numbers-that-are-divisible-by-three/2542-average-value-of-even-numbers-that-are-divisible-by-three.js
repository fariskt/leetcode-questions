/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    let sum = 0;
    let count = 0;
    for (let n of nums) {
        if (n % 6 === 0) {
            sum = sum + n;
            count++
        }
    }
    return sum === 0 ? sum : Math.floor(sum / count)

};