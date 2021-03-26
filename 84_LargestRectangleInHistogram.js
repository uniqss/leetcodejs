/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
    if (heights.length === 0) return 0;
    heights.push(0);
    let maxArea = 0;
    let stackIdx = [];
    for (let i = 0;i < heights.length;i++) {
        while(stackIdx.length > 0 && heights[stackIdx[stackIdx.length - 1]] > heights[i]) {
            let idx = stackIdx.pop();
            let width = i;
            if (stackIdx.length > 0) {
                width = i - stackIdx[stackIdx.length - 1] - 1;
            }
            let area = width * heights[idx];
            maxArea = Math.max(maxArea, area);
        }
        stackIdx.push(i);
    }

    return maxArea;
};

// const arr = [2,1,5,6,2,3];
const arr = [4,2,0,3,2,5];
let result = largestRectangleArea(arr);
console.log(result);
