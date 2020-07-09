// dynamic programming

function getLeastCountMoney2(moneys, n) {
    moneysize = moneys.length;
    f = [];
    i = 0; cost = 0;
    costs = [];
    f[0] = [0];
    for (mi = 0; mi < moneysize; mi++) { f[0][mi + 1] = 0; }
    for (i = 1; i <= n; i++) {
        cost = Infinity;
        for (mi = 0; mi < moneysize; mi++) { costs[mi] = Infinity; }
        for (mi = 0;mi < moneysize;mi++){
            if(i >= moneys[mi]){
                costs[mi] = f[i - moneys[mi]][0] + 1;
                cost = Math.min(cost, costs[mi]);
            }
        }

        for (mi = 0;mi < moneysize;mi++){
            if (cost == costs[mi]){
                f[i] = f[i - moneys[mi]].slice(0);
                f[i][0] = cost;
                f[i][mi + 1] ++;
                break;
            }
        }
    }
    return f[n];
}

ret = getLeastCountMoney2([1, 5, 11], 17);
console.log(ret);