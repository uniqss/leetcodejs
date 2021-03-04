/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let begin = 0;let maxlen = 0;
    let slen = s.length;
    let vvi = [];
    for (let i = 0;i < slen;i++){
        vvi[i] = [];
        for(j = 0;j < slen;j++){
            vvi[i][j] = 0
        }
    }
    let j;
    for (let len = 0; len < slen; len++) {
        for (let i = 0; i + len < slen; i++) {
            j = i + len
            if (len == 0) {
                vvi[i][j] = len + 1;
            } else if (len == 1) {
                vvi[i][j] = s[i] == s[j] ? len + 1 : 0
            } else {
                vvi[i][j] = (s[i] == s[j] && vvi[i + 1][j - 1] > 0) ? len + 1 : 0
            }
            if (vvi[i][j] > maxlen) {
                begin = i
                maxlen = vvi[i][j]
            }
        }
    }
    console.log(vvi);
    return s.substr(begin, maxlen);
};

let str = "abcda";
let ret = longestPalindrome(str);
console.log(ret);