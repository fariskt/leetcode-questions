/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    let map = { 0: 1 };

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map[sum - k] !== undefined) {
            count += map[sum - k];
        }

        map[sum] = (map[sum] || 0) + 1;
    }

    return count;
};