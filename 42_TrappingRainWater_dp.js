/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length <= 2) return 0;

    let size = height.length;
    let left_max = new Array(size);
    left_max[0] = height[0];
    for (let i = 1;i < size;i++) {
        left_max[i] = Math.max(left_max[i - 1], height[i]);
    }
    let right_max = new Array(size);
    right_max[size - 1] = height[size - 1];
    for (let i = size - 2;i >= 0;i--) {
        right_max[i] = Math.max(right_max[i + 1], height[i]);
    }

    let ret = 0;
    for (let i = 1;i < size - 1;i++) {
        ret += Math.min(left_max[i], right_max[i]) - height[i];
    }

    return ret;
};

let arr = [0,1,0,2,1,0,1,3,2,1,2,1];
let result = trap(arr);
console.log(result);
