/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s=s.trim()
    let num = s.split("")
    let res = ""
    let isNegative = false
    if(s[0]==="-"){
        isNegative = true
    }
    for(let i = (num[0] === "-" || num[0]=== "+" ? 1 : 0); i< num.length; i++){
        if(!isNaN(num[i]) && num[i] !== " "){
            res += num[i]
        }else{
            break;
        }
    }
   let finalNum = isNegative ? -Number(res) : Number(res);

    // Clamp to 32-bit signed integer range
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    if (finalNum < INT_MIN) return INT_MIN;
    if (finalNum > INT_MAX) return INT_MAX;

    return finalNum;
};