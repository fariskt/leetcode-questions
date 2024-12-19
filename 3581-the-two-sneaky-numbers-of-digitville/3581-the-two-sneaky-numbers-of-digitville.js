/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
   const frqncy = {}
   const dup = []
   for(let item of nums){
    frqncy[item] = (frqncy[item] || 0)+1
    if(frqncy[item] === 2){
        dup.push(item)
    }
   }
   return dup
};