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
    if (n === 1) return 1;
    let dpi1 = 1;
    let dpi2 = 1;
    let result = 0;
    for (let i = 2;i <= n;i++) {
        result = dpi1 + dpi2;
        dpi2 = dpi1;
        dpi1 = result;
    }
    return result;
};

let n = 4;
let result = climbStairs(n);
console.log(result);
