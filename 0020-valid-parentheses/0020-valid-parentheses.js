/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const parens = "() {} []"
    let i =0;
    while(i < s.length){
        stack.push(s[i])
        i++
        let openP = stack[stack.length - 2]
        let closeP = stack[stack.length - 1]

        let comP = openP + closeP;
        if(parens.includes(comP)){
            stack.pop()
            stack.pop()
        }
    }
    return stack.length === 0
};