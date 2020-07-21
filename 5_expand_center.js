/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    slen = s.length;
    center = 0;
    count = -1;
    leni = 0;
    leni1 = 0;
    for(i = 0;i < slen;i++){
        leni = expandAroundCenter(s, i, i);
        leni1 = expandAroundCenter(s, i, i + 1);
        if (count < leni){
            count = leni;
            center = i;
        }
        if (count < leni1){
            count = leni1;
            center = i;
        }
    }
    return s.substr(center - Math.floor((count - 1) / 2), count);
};
var expandAroundCenter = function(s, left, right){
    slen = s.length;
    while(left >= 0 && right < slen && s[left] == s[right]){
        left --;
        right ++;
    }
    return right - left - 1;
};

// str = "abcda";
str = "cbbd";
ret = longestPalindrome(str);
console.log(ret);