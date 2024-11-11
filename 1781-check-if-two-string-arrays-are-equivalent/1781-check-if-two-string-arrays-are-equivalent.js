/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    const wo1 = word1.join('')
    const wo2 = word2.join('')
    return wo1 === wo2 ? true : false

};