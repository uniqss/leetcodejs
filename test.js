let str = "hello";
let strSplit = str.split('');
str[0] = 'x';
str[0] = "x";
strSplit[2] = 'x';
console.log(strSplit.join(''));