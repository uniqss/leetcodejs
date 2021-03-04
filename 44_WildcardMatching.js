/*
先确定是几维数组的动态规划
再在纸上画几个简单的用例
s:abc p:*bc
* 0 1 2 3  i
0 T F F F
1 T T T T
2 F F T F
3 F F F T

j
字符串匹配基本是 dp[slen + 1][plen + 1]
一定要设置dp[0][0]为true，意义是两个都为空时匹配
循环时i的意义是把s的slen个字符用slen+1个竖线分隔开
j类同
找出*导致dp[i][j]为true的场景及原因
    1.从上往下发展，p 为 *
        dp[i][j - 1] && p[j - 1] == '*'
    2.从左往右发展，p 为 *
        dp[i - 1][j] && p[j - 1] == '*'
找出?导致dp[i][j]为true的场景及原因
    从左上往右下45度发展，p 为 ?
        dp[i - 1][j - 1] && p[j - 1] == '?'
找出c导致dp[i][j]为true的场景及原因
    从左上往右下45度发展，p 为 char
        dp[i - 1][j - 1] && p[j - 1] == s[i - 1]
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let slen = s.length;
    let plen = p.length;

    // let dp = new Array(slen + 1);
    // for (let i = 0;i < slen + 1;i++) {
    //     dp[i] = new Array(plen + 1);
    //     for (let j = 0;j < plen + 1;j++) {
    //         dp[i][j] = false;
    //     }
    // }
    // let dp = Array(slen + 1).fill(Array(plen + 1).fill(false)); 这样不行
    let dp = Array.from({length:slen + 1}, () => (Array.from({length:plen + 1}, ()=> false)));

    dp[0][0] = true;
    let i = 0;let j = 0;
    for (j = 1;j <= plen;j++) {
        for (i = 0;i <= slen;i++) {
            if (p[j - 1] === '*') {
                if (dp[i][j - 1]) dp[i][j] = true;
                if (i > 0 && dp[i - 1][j]) dp[i][j] = true;
            } else if (p[j - 1] === '?') {
                if (i > 0 && dp[i - 1][j - 1]) dp[i][j] = true;
            } else if (i > 0 && p[j - 1] === s[i - 1]) {
                if (dp[i - 1][j - 1]) dp[i][j] = true;
            }
        }
    }
    return dp[slen][plen];
};

let s ="";
let p = "";
// s = "aa";
// p = "*";
// s = "cb";
// p = "?a";
s = "abc";
p = "*?c";
s = "adceb";
p = "*a*b";

let result = isMatch(s, p);
console.log(result);
