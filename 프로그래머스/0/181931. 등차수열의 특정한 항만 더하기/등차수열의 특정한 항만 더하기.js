function solution(a, d, included) {
    let arr = [a];
    let sum = 0;
    for (let i = 1; i < included.length; i++) {
        arr[i] = a + i * d;
    };
    for (let i = 0; i < arr.length; i++) {
        if (included[i] === true) {
            sum += arr[i];
        }
    }
    return sum;
}