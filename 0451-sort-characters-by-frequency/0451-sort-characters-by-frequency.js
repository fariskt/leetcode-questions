/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const hash = {}
    for(let x of s){
     hash[x] = (hash[x] || 0) + 1
    }
    let answer = Object.entries(hash).
    sort((a, b)=> b[1] - a[1]).map(([char,count])=> char.repeat(count)).join("")
    return answer

};