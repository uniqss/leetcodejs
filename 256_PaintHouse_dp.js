
const minCost = function (costs) {
    let i = 1;
    for (;i < costs.length;i++) {
        costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
        costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
        costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
    }

    i--;
    return Math.min(costs[i][0], costs[i][1], costs[i][2]);
};

const minCost2 = function (costs) {
    let last = costs[0];
    let current = [0, 0, 0];
    for (let i = 1;i < costs.length;i++) {
        current[0] = costs[i][0] + Math.min(last[1], last[2]);
        current[1] = costs[i][1] + Math.min(last[0], last[2]);
        current[2] = costs[i][2] + Math.min(last[0], last[1]);

        for (let j = 0;j < 3;j++) {
            last[j] = current[j];
        }
    }

    return Math.min(current[0], current[1], current[2]);
}

let costs = [[]];
for (let i = 0;i < 11;i++){
    costs[i] = [3, 5, 7];
}
let mc = minCost2(costs);
console.log(mc);
