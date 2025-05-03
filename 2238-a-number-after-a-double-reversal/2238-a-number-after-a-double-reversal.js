/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let rev = num.toString().split("").reverse().join("")
    let nozero = parseInt(rev, 10)
    if(String(nozero) === rev){
        return true
    }else{
        return false
    }
};