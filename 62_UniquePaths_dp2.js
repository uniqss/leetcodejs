/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m < n) {let tmp = m;m = n;n = tmp;}
    let dp = Array.from({length:m}, () => 1);
    let prev = 0;
    for (let j = 1;j < n;j++) {
        prev = 0;
        for (let i = 0;i < m;i++) {
            dp[i] += prev;
            prev = dp[i];
        }
    }
    return dp[m - 1];
};


let m = 3,n = 7;
let result = uniquePaths(m, n);
console.log(result);
