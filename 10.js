/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    slen = s.length;
    plen = p.length;

    f = [];
    for (i = 0; i <= slen; i++) {
        f[i] = [];
        for (j = 0; j <= plen; j++)
            f[i][j] = false;
    }

    f[0][0] = true;
    for (j = 2; j <= plen; j++)
        f[0][j] = f[0][j - 2] && p[j - 1] == '*';

    for (i = 1; i <= slen; i++)
        for (j = 1; j <= plen; j++) {
            if (p[j - 1] != '*') {
                f[i][j] = f[i - 1][j - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == '.');
            } else {
                f[i][j] = f[i][j - 2] || (f[i - 1][j] && (s[i - 1] == p[j - 2]||p[j - 2] == '.'))
            }
        }

    return f[slen][plen];
};


s = "aaaabbbb";
p = "c*a*b*";
match = isMatch(s, p);
console.log(match);
