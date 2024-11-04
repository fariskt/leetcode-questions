/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let str = n.toString().split("");
    let mult = str.reduce((acc, val) => parseInt(acc) * parseInt(val))
    let add = str.reduce((acc, val) => parseInt(acc) + parseInt(val))
    return mult - add
};