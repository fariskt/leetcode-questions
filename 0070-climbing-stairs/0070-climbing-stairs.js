/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let dp = [1, 2];

    if (n === 1) return dp[0];
    if (n === 2) return dp[1];

    for (let i = 3; i <= n; i++) {
        dp[i - 1] = dp[i - 2] + dp[i - 3];
    }
    return dp[n - 1];
};
