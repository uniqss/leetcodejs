/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || x > 0 && x % 10 == 0) return false;
    xmod = 0;
    xreverse = 0;
    while (x > xreverse) {
        xmod = x % 10;
        x = Math.floor(x / 10);
        xreverse *= 10;
        xreverse += xmod;
    }
    return x == xreverse || x == Math.floor(xreverse / 10);
};

i = 121;
ret = isPalindrome(i);
console.log(ret)