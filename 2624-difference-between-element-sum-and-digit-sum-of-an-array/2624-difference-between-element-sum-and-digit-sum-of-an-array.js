/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let x = nums.reduce((total, val) => total + val, 0)
    let y = nums.join("").split("").map(item =>
     Number(item)).reduce((total, val) => total + val, 0)
   return x -y

};