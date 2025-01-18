/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
   let count = 0;
   for(let x of stones){
    if(jewels.includes(x)){
        count++ 
    }
   }
   return count
};