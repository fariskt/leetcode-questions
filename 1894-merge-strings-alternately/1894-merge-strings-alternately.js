/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(a, b) {
    let max = Math.max(a.length ,b.length)
let c = ''

for(let i = 0; i<max; i++){
  if(i< a.length ){
      c += a[i]
  }
  if(i< b.length ){
      c += b[i]
  }
  
}
return c
};