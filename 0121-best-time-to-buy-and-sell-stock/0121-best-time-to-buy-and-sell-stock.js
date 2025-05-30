/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxprofit = 0;

    while(right < prices.length){
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left]
            maxprofit = Math.max(maxprofit,profit)
        }else{
            left = right
        }
        right++
    }
    return maxprofit
}