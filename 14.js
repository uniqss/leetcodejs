/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strsLen = strs.length;
    if (strsLen == 0) return "";
    if (strsLen == 1) return strs[0];
    str = strs[0];
    for (end = 0;end < str.length;end++){
        for (i = 0;i < strsLen;i++){
            strCurr = strs[i];
            if (end >= strCurr.length) return strCurr;
            if (str[end] != strCurr[end]) return str.substr(0, end);
        }
    }
    return str;
};

strs = ["flower","flow","flight"];
ret = longestCommonPrefix(strs);
console.log(ret);
