/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array.from({length:m}, () => (Array.from({length:n}, () => 1)));
    for (let i = 1;i < m;i++) {
        for (let j = 1;j < n;j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};


let m = 3,n = 7;
let result = uniquePaths(m, n);
console.log(result);

