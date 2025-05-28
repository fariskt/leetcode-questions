/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let num = left
    let arr =[]
    for(let i = left; i<=right;i++){
        let aa = i.toString().split("").every(item => item !== "0" && i % item === 0)
        if(aa){
            arr.push(i)
        }
    }
    return arr
};