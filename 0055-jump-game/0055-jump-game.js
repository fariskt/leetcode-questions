/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let last = 0;
    for(let i = 0; i<nums.length ; i++){
        if(i > last) return false
        last = Math.max(last, i+ nums[i])
    }
    return true
};