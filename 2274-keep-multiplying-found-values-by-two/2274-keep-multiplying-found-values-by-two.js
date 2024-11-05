/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
  let found = new Set(nums);
  while(found.has(original)) original *= 2;
  return original
};