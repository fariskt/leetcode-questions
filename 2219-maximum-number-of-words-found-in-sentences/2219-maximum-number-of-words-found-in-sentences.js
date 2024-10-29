/**
 * @param {string[]} sentences
 * @return {number}
 */
let mostWordsFound = (str) => {
  let largestSentence = str[0].split(" ").length
  for (let i = 1; i < str.length; i++) {
    const wordLength = str[i].split(" ").length
    if (wordLength > largestSentence) {
      largestSentence = wordLength
    }
  }
  return largestSentence
};