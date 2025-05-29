/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let arr = [[]]
    for(let i= 0; i < nums.length; i++){
        const sets = arr.map(item => [...item, nums[i]])
        arr.push(...sets)
    }
    return arr
};
