/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let word = s.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].split("").reverse().join("");
  }
  return word.join(" ");
};