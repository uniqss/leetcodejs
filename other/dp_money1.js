// dynamic programming

function getLeastCountMoney1(n){
    f = [];
    i = 0; coust = 0;
    f[0] = 0;
    for (i = 1;i <= n;i++){
        cost = Infinity;
        if (i >= 1) cost = Math.min(cost, f[i - 1] + 1);
        if (i >= 5) cost = Math.min(cost, f[i - 5] + 1);
        if (i >= 11) cost = Math.min(cost, f[i - 11] + 1);
        f[i] = cost;
    }
    return f[n];
}

ret = getLeastCountMoney1(15);
console.log(ret);