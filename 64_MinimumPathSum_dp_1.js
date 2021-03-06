/*
这题挺有意思，可以有两个方向扩展：
1.带obstacle的带权重的寻路，找出最小值路径
2.找出该路径
对于1.其实很简单，这里的计算思路无非是取top和left里面的相对较小值+自己本身的值，并记录到dp中，只要判定一下top和left的obstacleGrid是不是阻挡就行了，
如果是阻挡，就等于left。但是如果top和left双阻挡，就只能等于-1了。并且每步要判定dp[top]和dp[left]是不是-1。
对于2.只要记录出每一个格子的父节点就行了，最终找到dp[m - 1][n - 1]往前回溯，就能得到路径。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid[0][0] === 0) return 0;
    let m = grid.length;
    let n = grid[0].length;
    let dp = grid.slice();
    for (let i = 1;i < m;i++) {
        if (dp[i][0] === 0 || dp[i - 1][0] === 0) {
            dp[i][0] = 0;
        } else {
            dp[i][0] += dp[i - 1][0];
        }
    }
    for (let j = 1;j < n;j++) {
        if (dp[0][j] === 0 || dp[0][j - 1] === 0) {
            dp[0][j] = 0;
        } else {
            dp[0][j] += dp[0][j - 1];
        }
    }
    for (let i = 1;i < m;i++) {
        for (let j = 1;j < n;j++) {
            if (grid[i][j] === 0) {
                dp[i][j] = 0;
                continue;
            }
            if (dp[i - 1][j] === 0 && dp[i][j - 1] === 0) {
                dp[i][j] = 0;
                continue;
            }
            if (dp[i - 1][j] === 0) {
                dp[i][j] += dp[i][j - 1];
            } else {
                dp[i][j] += dp[i - 1][j];
            }
        }
    }
    return dp[m - 1][n - 1];
};



// 我们用0表示无法到达的点(方便对齐)
/*
1 3 1
1 0 1
4 2 1
 */
let grid = [[1,3,1],[1,0,1],[4,2,1]];
let result = minPathSum(grid);
console.log(result);
