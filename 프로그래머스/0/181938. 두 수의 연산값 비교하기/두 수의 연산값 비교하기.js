function solution(a, b) {
    let number1 = Number(`${a}${b}`);
    let number2 = 2 * a * b;
    return Math.max(number1, number2);
}