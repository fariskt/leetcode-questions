/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let arr = [];
  for(let i=0;i<nums.length;i++){
     let newRR = nums[i] * nums[i]     
     arr.push(newRR)
  }
  return arr.sort((a,b)=> a-b);
};