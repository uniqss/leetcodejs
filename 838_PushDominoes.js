/**
 * @param {string} dominoes
 * @return {string}
 */
let pushDominoes = function(dominoes) {
    let startIdx = 0;
    let currIdx = 0;
    let lastState = dominoes[0];
    let ret = dominoes.split('');

    for (;currIdx < dominoes.length;++currIdx) {
        let curr = dominoes[currIdx];
        if (lastState == '.') {
            if (curr == '.') {
            } else if (curr == 'L') {
                for (let i = startIdx;i < currIdx;++i){
                    ret[i] = 'L';
                }
                startIdx = currIdx;
                lastState = curr;
            } else {
                startIdx = currIdx;
                lastState = curr;
            }
        } else if (lastState == 'L') {
            if (curr == '.') {
                startIdx = currIdx;
                lastState = curr;
            } else if (curr == 'L') {
                startIdx = currIdx;
            } else {
                startIdx = currIdx;
                lastState = curr;
            }
        } else {
            if (curr == '.') {
            } else if (curr == 'L') {
                let mid = (currIdx + startIdx) / 2;
                for (let i = startIdx + 1; i < mid; ++i) {
                    ret[i] = 'R';
                    ret[currIdx - (i - startIdx)] = 'L';
                }
                startIdx = currIdx;
                lastState = curr;
            } else {
                for (let i = startIdx + 1;i < currIdx;++i) {
                    ret[i] = curr;
                }
                startIdx = currIdx;
            }
        }
    }
    if (lastState == 'R' && startIdx < currIdx) {
        for (let i = startIdx + 1;i < currIdx;++i) {
            ret[i] = 'R';
        }
    }
    return ret.join('');
};


let dominoes = "";
let result = "";

dominoes = "RR.L";
result = pushDominoes(dominoes);
console.log(result);

dominoes = ".L.R.";
result = pushDominoes(dominoes);
console.log(result);

dominoes = ".L.R...LR..L..";
result = pushDominoes(dominoes);
console.log(result);
