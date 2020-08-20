/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    arrInt = [1000, 500, 100, 50, 10, 5, 1];
    arrString = ["M", "D", "C", "L", "X", "V", "I"];
    ret = "";
    for (i = 0;i < arrInt.length;i++){
        while(num >= arrInt[i]){
            num -= arrInt[i];
            ret += arrString[i];
        }
        post = i + (i + 1)%2 + 1;
        if (post < arrInt.length && num >= arrInt[i] - arrInt[post]){
            num -= arrInt[i] - arrInt[post];
            ret += arrString[post] + arrString[i];
        }
    }
    return ret
};

i = 1994;
ret = intToRoman(i);
console.log(ret);