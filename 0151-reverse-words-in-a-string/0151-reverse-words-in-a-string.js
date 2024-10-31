/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let reversed = s
    .split(" ")
    .filter((x) => x != "")
    .reverse()
    .join(" ");
  return reversed;
};