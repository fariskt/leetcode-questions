/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let word = s.trim().split(" ").reverse()
  const lengtharr = word[0].length
  return lengtharr
  

};