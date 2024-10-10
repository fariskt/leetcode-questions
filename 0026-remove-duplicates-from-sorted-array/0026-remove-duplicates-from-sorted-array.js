/**
 * @param {number[]} nums
 * @return {number}
 */

let removeDuplicates = (nums) => {
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i]  !== nums[i - 1]) {
            nums[k] = nums[i]
            k++
        }
    }
    for(let i=k;i<nums.length;i++){
        nums[i] = '_'
    }
    return k
}


