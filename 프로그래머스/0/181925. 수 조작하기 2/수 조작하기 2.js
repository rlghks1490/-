function solution(numLog) {
    let arr = [];
    for (let i = 0; i < numLog.length-1; i++) {
        if (numLog[i+1] === numLog[i] + 1) {
            arr[i] = 'w';
        }
        else if (numLog[i+1] === numLog[i] - 1) {
            arr[i] = 's';
        }
        else if (numLog[i+1] === numLog[i] + 10) {
            arr[i] = 'd';
        }
        else {
            arr[i] = 'a';
        }
    }
    return arr.join('');
}