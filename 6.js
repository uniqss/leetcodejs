/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) return s;
    lines = [];
    for(i = 0;i < numRows;i++){
        lines[i] = "";
    }
    slen = s.length;
    goingDown = true;
    currIdx = 0;
    for(i = 0;i < slen;i++){
        lines[currIdx] += s[i];
        if (goingDown){
            currIdx++;
            if(currIdx >= numRows - 1) goingDown = false;
        } else {
            currIdx--;
            if (currIdx <= 0) goingDown = true;
        }
    }
    ret = "";
    for(i = 0;i < numRows;i++){
        ret += lines[i];
    }
    return ret;
};

str = "PAYPALISHIRING";
ret = convert(str, 3)
console.log(ret)