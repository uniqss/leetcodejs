/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    ret = 0;
    i = 0;
    for (;i < s.length;i++) {
        post = i + 1;
        if (post < s.length && dict[s[i]] < dict[s[post]]){
            ret += dict[s[post]] - dict[s[i]];
            i++;
            continue;
        }
        ret += dict[s[i]];
    }
    return ret;
};

str = "MCMXCIV";
ret = romanToInt(str);
console.log(ret);
