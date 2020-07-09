// dynamic programming

function getLeastCountMoney2(n){
    f = [];
    i = 0; coust = 0;
    f[0] = [0, 0, 0, 0];
    ret = [];
    cost = 0;
    cost1 = 0;cost2 = 0;cost3 = 0;
    for (i = 1;i <= n;i++){
        cost1 = cost2 = cost3 = Infinity;
        if (i >= 1) cost1 = f[i - 1][0] + 1;
        if (i >= 5) cost2 = f[i - 5][0] + 1;
        if (i >= 11) cost3 = f[i - 11][0] + 1;

        cost = Math.min(cost1, cost2, cost3);
        if (cost == cost1) f[i] = [cost, f[i - 1][1] + 1, f[i - 1][2], f[i - 1][3]];
        if (cost == cost2) f[i] = [cost, f[i - 5][1], f[i - 5][2] + 1, f[i - 5][3]];
        if (cost == cost3) f[i] = [cost, f[i - 11][1], f[i - 11][2], f[i - 11][3] + 1];
    }
    return f[n];
}

ret = getLeastCountMoney2(17);
console.log(ret);