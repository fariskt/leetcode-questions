/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = 0;
    let y =x;
    if(x < 0){
        return false
    }
    while(y !=0){
        let reminder = y % 10;
        reverse= reverse * 10 + reminder
        y = Math.floor(y/10);
    }
   return reverse === x
};