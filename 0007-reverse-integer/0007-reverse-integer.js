/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reverse = 0
    let num = Math.abs(x)

    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;

    while (num > 0) {
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10)
        if (reverse > MAX_INT) {
            return 0;
        }
    }
    reverse = reverse * Math.sign(x)
    if(reverse > MAX_INT || reverse < MIN_INT){
        return 0
    }
    return reverse
};