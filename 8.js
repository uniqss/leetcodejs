/**
 * @param {string} str
 * @return {number}
 */

// " ", "+/-", "number", other
var transmap = {
    "begin": ["begin", "signed", "number", "end"],
    "signed": ["end", "end", "number", "end"],
    "number": ["end", "end", "number", "end"],
    "end": ["end", "end", "end", "end"],
};

var state = "begin";
var number = 0;
var positive = true;

var getType = function (c) {
    if (c == ' ') return 0;
    if (c == '+') return 1;
    if (c == '-') {
        if (state == "begin") {
            positive = false;
        }
        return 1;
    }
    if (c >= '0' && c <= '9') {
        return 2;
    }
    return 3;
};
var nextStep = function (c) {
    t = getType(c);
    d = c - '0';
    state = transmap[state][t];
    if (state == "number") {
        if (positive && (number > 214748364 || number == 214748364 && c > 7)) {
            return 2147483647;
        }
        if (!positive && (number > 214748364 || number == 214748364 && c >= 8)) {
            return -2147483648;
        }
        number *= 10;
        number += d;
    }
    return state != "end";
};
var getNum = function(){
    if (number < 0||positive) return number;
    return -number;
}

var myAtoi = function (str) {
    slen = str.length;
    for (i = 0; i < slen; i++) {
        if (!nextStep(str[i])) {
            break;
        }
    }
    return getNum();
};



str = "   -42";
ret = myAtoi(str);
console.log(ret);
