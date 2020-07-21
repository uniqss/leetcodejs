/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows <= 1) return s;
    slen = s.length;
    repeatLen = 2 * numRows - 2;
    ret = "";
    for (l = 0; l < numRows; l++) {
        for (down = l; down < slen; down += repeatLen) {
            ret += s[down];
            downmod = down % repeatLen;
            if (downmod > 0 && downmod < numRows - 1) {
                up = repeatLen - downmod + down - downmod;
                if (up < slen) {
                    ret += s[up];
                }
            }
        }
    }
    return ret;
};

str = "PAYPALISHIRING";
ret = convert(str, 3)
console.log(ret)