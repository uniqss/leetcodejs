/*
算法的一个优化思路：
当我们记下所有的值时，如果m=n，因为对称性，我们会发现dp[x][y] = dp[y][x]。根据这个特征，我们只需要求正方形中的一半就行了
  1 2 3 4 5 m
1 . . . . . .
2 o . . . . .
3 o o . . . .
4 o o o . . .
5 o o o o . .
n o o o o o .
所有的o可以不用计算

计算机是在竖向填表

但是考虑到m与n不相等的情况,我们有两个选择：
选择1，让m >= n并填右半个表
  1 2 3 4 5 m
1 . . . . . .
2 o . . . . .
3 o o . . . .
n o o o . . .
竖向填：
for (i = 0;i < m;i++)
    for(j = 0;j < i + 1 && j < n;j++)
横向填：
for (j = 0;j < n;j++)
    for(i = j;i < m;i++)
选择2，让 m <= n并填左半个表
  1 2 3 m
1 . o o o
2 . . o o
3 . . . o
4 . . . .
5 . . . .
n . . . .
竖向填：
for (i = 0;i < m;i++)
    for(j = i;j < n;j++)
横向填：
for (j = 0;j < n;j++)
    for(i = 0;i < j + 1 && i < m;i++)
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let top = 0;
    let left = 0;
    // 注意，实际写的时候有个优化，就是把所有值初始化为1，然后下标实际上是从1开始，可以省掉一横排加一竖排不用填，总共省掉m + n - 1个元素

    if (1 === 0){
        // 选择1，让m >= n并填右半个表
        if (m < n) {let tmp = m;m = n;n = tmp;}
        let dp = Array.from({length:m}, () => (Array.from({length:n}, () => 1)));
        /*
  0 1 2 3 4 m
0 x x x x x x
1 x . . . . .
2 x o . . . .
n x o o . . .
         */
        if (1 === 0) {
            // 竖向填
            for (let i = 1;i < m;i++) {
                for (let j = 1;j < i + 1 && j< n;j++) {
                    left  = (i - 1) >= j ? dp[i - 1][j] : dp[j][i - 1];
                    top = i >= (j - 1) ? dp[i][j - 1] : dp[j - 1][i];
                    dp[i][j] = top + left;
                }
            }
        } else {
            // 横向填
            for (let j = 1;j < n;j++) {
                for (let i = j;i < m;i++) {
                    left  = (i - 1) >= j ? dp[i - 1][j] : dp[j][i - 1];
                    top = i >= (j - 1) ? dp[i][j - 1] : dp[j - 1][i];
                    dp[i][j] = top + left;
                }
            }
        }
        return dp[m - 1][n - 1];
    } else {
        // 选择2，让 m <= n并填左半个表
        if (m > n) {let tmp = m;m = n;n = tmp;}
        let dp = Array.from({length:m}, () => (Array.from({length:n}, () => 1)));
        /*
  0 1 2 m
0 x x x x
1 x . o o
2 x . . o
3 x . . .
4 x . . .
n x . . .
         */
        if (1 === 0) {
            // 竖向填
            for (let i = 1;i < m;i++) {
                for (let j = i;j < n;j++) {
                    left  = (i - 1) <= j ? dp[i - 1][j] : dp[j][i - 1];
                    top = i <= (j - 1) ? dp[i][j - 1] : dp[j - 1][i];
                    dp[i][j] = top + left;
                }
            }
        } else {
            // 横向填
            for (let j = 1;j < n;j++) {
                for (let i = 1;i <= j && i < m; i++) {
                    left  = (i - 1) <= j ? dp[i - 1][j] : dp[j][i - 1];
                    top = i <= (j - 1) ? dp[i][j - 1] : dp[j - 1][i];
                    dp[i][j] = top + left;
                }
            }
        }

        return dp[m - 1][n - 1];
    }
};


let m = 3,n = 7;
let result = uniquePaths(m, n);
console.log(result);

