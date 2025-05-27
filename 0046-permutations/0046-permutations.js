/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    function back(i){
        if(i == nums.length){
            res.push(nums.slice(0))
            return
        }
        for(let j = i; j < nums.length; j++){
            swap(nums, i ,j)
            back(i+1)
            swap(nums, i, j)
        }
    }
    back(0)
    return res
};

function swap(nums, i , j){
let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}