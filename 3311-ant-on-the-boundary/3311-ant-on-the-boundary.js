/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
    let boundary = 0;
    let position = 0;
    for(let step of nums){
        position = position+step;
        if(position === 0){
            boundary++
        }
    }
    return boundary
};