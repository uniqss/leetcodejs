/**
 * @param {number[]} height
 * @return {number}
 */
var calcVolume = function (left, right, height) {
    return Math.min(height[left], height[right]) * (right - left)
}
var maxArea = function (height) {
    left = 0;
    right = height.length - 1;
    volume = calcVolume(left, right, height);
    temp = 0;
    while (true) {
        if (height[left] < height[right]) {
            temp = left + 1;
            while (temp < right && height[temp] < height[left])
                temp++;

            if (temp >= right)
                break;
            newVolume = calcVolume(temp, right, height);
            volume = Math.max(newVolume, volume);
            left = temp;
        } else {
            temp = right - 1;
            while (temp > left && height[temp] < height[right])
                temp--;
            if (temp <= left)
                break;
            newVolume = calcVolume(left, temp, height);
            volume = Math.max(newVolume, volume);
            right = temp;
        }
    }
    return volume
};


heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
ret = maxArea(heights);
console.log(ret);
