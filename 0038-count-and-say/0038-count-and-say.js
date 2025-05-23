/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = "1";
    for(let i =1; i<n; i++){
        let current = ""
        let count = 1
        for(let j = 1; j<=res.length; j++){
            if(res[j] === res[j-1] ){
                count++
            }else{
                current += count + res[j - 1];
                count = 1
            }
        }
        res = current
    }
    return  res
};