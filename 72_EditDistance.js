/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;
    if (len1 === 0) return len2;
    if (len2 === 0) return len1;
    let dp = Array.from({length:len1 + 1}, ()=>Array.from({length:len2 + 1}, ()=>0));
    for (let i = 1;i <= len1;i++) {
        dp[i][0] = i;
    }
    for (let j = 1;j <= len2;j++) {
        dp[0][j] = j;
    }
    for (let i = 1;i <= len1;i++) {
        for (let j = 1;j <= len2;j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                let disExchange = dp[i - 1][j - 1];
                let disInsert = dp[i][j - 1];
                let disDelete = dp[i - 1][j];
                dp[i][j] = Math.min(disExchange, disInsert, disDelete) + 1;
            }
        }
    }
    return dp[len1][len2];
};

let word1 = "horse";
let word2 = "ros";
let result = minDistance(word1, word2);
console.log(result);
