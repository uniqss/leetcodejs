/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (s == undefined || s == ""|| s.length == 0) {
        return 0;
    }
    let dp = [];
    for (let i = 0;i < s.length;i++) {
        dp[i] = 0;
    }

    let ret = 0;
    for (let i = 1;i < s.length;i++) {
        if (s[i] == ')') {
            if (s[i - 1] == '(') {
                if (i >= 2) {
                    dp[i] = dp[i - 2] + 2;
                } else {
                    dp[i] = 2;
                }
            } else if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] == '(') {
                dp[i] = dp[i - 1] + 2;
                if (i - dp[i] >= 0) {
                    dp[i] += dp[i - dp[i]];
                }
            }
            ret = Math.max(ret, dp[i]);
        }
    }
    return ret;
};

let str = "()(())";
let ret = longestValidParentheses(str);
console.log(ret);
