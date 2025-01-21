/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function(accounts) {
    let res = 0;
    accounts.forEach(item => {
        let temp = item.reduce((total,val)=> {
            return total + val
        }, 0)
        res = Math.max(res,temp)
    })
    return res
};