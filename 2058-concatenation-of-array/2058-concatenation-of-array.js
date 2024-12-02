/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let nums2 = [...nums];
    let concated = nums.concat(nums2);
    return concated
};