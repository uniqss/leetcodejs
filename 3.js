/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    i = 0; j = 0; ret = 0; slen = s.length;
    arr = [];
    for (tmp = 0; tmp < 256; tmp++) {
        arr[tmp] = -1;
    }
    for (; i < slen; i++) {
        for (j = i; j < slen; j++) {
            sj = s.charCodeAt(j);
            if (arr[sj] >= i) {
                ret = Math.max(ret, j - i);
                i = arr[sj];
                for (tmp = 0; tmp < 256; tmp++) {
                    arr[tmp] = -1;
                }
                break;
            }
            arr[sj] = j;
        }
        if (j == slen) {
            ret = Math.max(ret, j - i);
            break;
        }
    }
    return ret;
};


s = "dvdf";
ret = lengthOfLongestSubstring(s);
console.log(ret);