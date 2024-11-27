/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let c = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let rev = c.split("").reverse().join("")
    if(c === rev){
        return true
    }else{
        return false
    }
};