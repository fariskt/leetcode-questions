/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = []
    function backtrack(arr, start) {
        
        if(arr.length === k){
            res.push([...arr])
            return
        }
        for (let i = start; i <=n; i++) {

            arr.push(i)
            backtrack(arr, i + 1)
            arr.pop()
        }
    }
    backtrack([], 1)
   return res
};