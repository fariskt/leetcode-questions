/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let square = String(Math.sqrt(num));
    return square.includes('.') ? false : true
};