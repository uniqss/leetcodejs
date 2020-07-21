/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    begin = 0;maxlen = 0;
    slen = s.length;
    vvi = []
    for (i = 0;i < slen;i++){
        vvi[i] = []
        for(j = 0;j < slen;j++){
            vvi[i][j] = 0
        }
    }
    for (len = 0;len < slen;len++){
        for (i = 0;i + len < slen;i++){
            j = i + len
            if (len == 0){
                vvi[i][j] = len + 1;
            } else if (len == 1){
                vvi[i][j] = s[i] == s[j] ? len + 1 : 0
            } else {
                vvi[i][j] = (s[i] == s[j] && vvi[i + 1][j - 1] > 0) ? len + 1 : 0
            }
            if (vvi[i][j] > maxlen){
                begin = i
                maxlen = vvi[i][j]
            }
        }
    }
    console.log(vvi);
    return s.substr(begin, maxlen);
};

str = "abcda";
ret = longestPalindrome(str);
console.log(ret);