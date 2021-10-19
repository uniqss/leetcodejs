/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
let checkMove = function(board, rMove, cMove, color) {
    if (color != 'W' && color != 'B') return false;
    let rMax = board.length;
    let cMax = board[0].length;
    if (rMove < 0 || rMove >= rMax || cMove < 0 || cMove >= cMax) return false;
    if (board[rMove][cMove] != '.') return false;
    let op_color = color == 'W' ? 'B' : 'W';
    let diff = [
        [-1, 0],
        [-1, -1],
        [0, -1],
        [1, -1],
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1]
    ];
    for (let di = 0;di < diff.length;++di){
        let dr = diff[di][0];
        let dc = diff[di][1];
        if (rMove + dr * 2 < 0||rMove + dr * 2 > rMax) continue;
        if (cMove + dc * 2 < 0||cMove + dc * 2 > cMax) continue;
        if (board[rMove + dr][cMove + dc] != op_color) continue;
        for(let i = 2;;i++){
            let r = rMove + dr * i;
            if (r < 0 || r >= rMax) break;
            let c = cMove + dc * i;
            if (c < 0 || c >= cMax) break;
            if (board[r][c] == color) return true;
            if (board[r][c] != op_color) break;
        }
    }
    return false;
};


// let board = [[".",".",".",".",".",".",".","."],[".","B",".",".","W",".",".","."],[".",".","W",".",".",".",".","."],[".",".",".","W","B",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".","B","W",".","."],[".",".",".",".",".",".","W","."],[".",".",".",".",".",".",".","B"]];

// let board = [[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],["W","B","B",".","W","W","W","B"],[".",".",".","B",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."]];
// let rMove = 4;
// let cMove = 3;
// let color = "B";

// let board = [
//     ["W","W",".","W","B","B",".","."],
//     ["B",".","W",".","B","B","B","."],
//     ["B","B","W",".","W","W","W","B"],
//     [".",".","W","B","B",".","B","B"],
//     ["W",".","W","B","W","W","W","W"],
//     ["B","W","W","B","B","B","B","."],
//     ["W","B","B","W",".","W",".","B"],
//     ["W","W","B","W",".",".",".","B"]];
// let rMove = 6;
// let cMove = 4;
// let color = "B";

// let board = [
//     ["W",".","W","B","B",".","B","W"],
//     [".","W","B",".",".",".",".","W"],
//     ["W",".",".","B","W","B","B","."],
//     [".","W",".","W","B","W","B","W"],
//     [".","W",".",".","B","B",".","W"],
//     [".",".","W","W","W","W","W","B"],
//     ["W","B","B",".",".",".","B","."],
//     ["B","W","W","W",".","B","B","W"]];
// let rMove = 2;
// let cMove = 2;
// let color = "B";

let board = [
    ["W","B","B","W","W",".",".","."],
    [".","B","W","W",".","B",".","."],
    ["B","W",".",".","B","B",".","B"],
    ["B","B","B","B",".","W","B","W"],
    [".","W","W",".",".","B",".","W"],
    [".","B","B","W",".",".","B","."],
    ["W",".","B",".",".",".","W","."],
    [".",".",".","B","B",".","W","W"]];
let rMove = 5;
let cMove = 0;
let color = "W";

let result = checkMove(board, rMove, cMove, color);
console.log(result);
