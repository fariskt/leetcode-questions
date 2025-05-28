/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let arr = s.split("")
    let uni = [...new Set(arr)]
    return uni.length
};