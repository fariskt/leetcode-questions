/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missingCount = 0;
    let totalCount = 0;
    for(let i =0;i<nums.length+1;i++){
        missingCount = missingCount+ i;
        if(nums[i]){
            totalCount = totalCount + nums[i]
        }
    }
    return missingCount - totalCount
};