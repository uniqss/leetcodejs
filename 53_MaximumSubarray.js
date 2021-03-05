/*
开始自己弄了两维数组做表，思路错了
这里的逻辑是：如果从前面某X位到当前Y位（以Y位结尾）的最大值为MAX，则到Y+1位的最大值要么就是VAL(Y+1)要么就是MAX+VAL(Y+1)，依次类推
再对该最大值求最大，就是最大值
如果我们要找起始位置，则要记录当MAX+VAL(Y+1) < VAL(Y+1）的点。出现最大值时的该点就是起始位置。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let nlen = nums.length;
    if (nlen === 0) return 0;
    let dp = [];
    dp[0] = nums[0];
    let ret = nums[0];
    for (let i = 1;i < nlen;i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        ret = Math.max(ret, dp[i]);
    }
    return ret;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
// nums = [-1];
let result = maxSubArray(nums);
console.log(result);
