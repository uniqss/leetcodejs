/**
 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function(num) {
    for (let i = num.length - 1;i >= 0;--i){
        if (num[i] % 2 == 1) return num.substr(0, i + 1);
    }
    return "";
};

let num = "52";
let ret = largestOddNumber(num);
console.log(ret);
