/*
这是标准dp解
还可以优化成两个变量就行了。 dpi1,dpi2,每走一步
result = dpi1 + dpi2;
dpi2 = dpi1;
dpi1 = result;
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = Array.from({length:n+1}, ()=> 0);
    dp[0] = dp[1] = 1;
    for (let i = 2;i <= n;i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

let n = 4;
let result = climbStairs(n);
console.log(result);
