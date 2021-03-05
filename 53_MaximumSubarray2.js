
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    let themax = nums[0];
    let ret = nums[0];
    for (let i = 1;i < nums.length;i++) {
        themax = Math.max(themax + nums[i], nums[i]);
        ret = Math.max(ret, themax);
    }
    return ret;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
// nums = [-1];
let result = maxSubArray(nums);
console.log(result);
