/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let first = nums[0]
    let last = nums[nums.length - 1]
    let aa = Math.abs(last - first)
    let res = 0
    for(let i = 0 ; i<nums.length; i++){
        if(Math.abs(nums[i] - nums[i+1])> res){
            res = Math.abs(nums[i] - nums[i+1])
        }
    }
    return Math.max(res, aa)
};