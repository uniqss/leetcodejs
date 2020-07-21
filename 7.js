/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    xmod = 0;
    max1 = 214748364;
    min1 = -214748364;
    ret = 0;
    if (x == 0) return 0;
    xsign = Math.sign(x);
    while(x != 0){
        xmod = x % 10;
        x = xsign * Math.floor(Math.abs(x) / 10);
        if (ret > max1 || (ret >= max1 && xmod > 7)) return 0;
        if (ret < min1 || (ret <= min1 && xmod < -8)) return 0;
        ret *= 10;
        ret += xmod;
    }
    return ret;
};


var i = 1534236469;
ret = reverse(i);
console.log(ret);