/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
     const comb = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
    let result = []
    if(digits.length === 0){
        return []
    }
    function backtrack(index,current){
        if(index === digits.length){
            result.push(current)
            return current
        }
        let letters = comb[digits[index]]
        for(let letter of letters){
            backtrack(index + 1, current + letter)
        }
    }
    backtrack(0, "")
    return result
};
