/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false
    const tlength = t.length
    let sq = 0;
    for(let i=0;i<tlength;i++){
        if(s[sq] === t[i]){
        sq++
        }
    }
    return sq === s.length
};