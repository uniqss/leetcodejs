/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
let findSmallestSetOfVertices = function(n, edges) {
    let state = [];
    for (let i = 0;i < n;++i) {
        state[i] = 1;
    }
    for (let i = 0;i < edges.length;++i) {
        let from = edges[i][0];
        let to = edges[i][1];
        state[to] = 0;
    }
    let ret = [];
    for (let i = 0;i < n;++i) {
        if (state[i] == 1) {
            ret.push(i);
        }
    }
    return ret;
};

let n = 5;
let edges = [[0,1],[2,1],[3,1],[1,4],[2,4]];

let ret = findSmallestSetOfVertices(n, edges);
console.log(ret);
