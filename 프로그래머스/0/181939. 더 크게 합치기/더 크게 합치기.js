function solution(a, b) {
    let answer = 0;
    let number1 = Number((String(a) + String(b)));
    let number2 = Number((String(b) + String(a)));
    if (number1 > number2) {
        answer = number1;
        } else
            { answer = number2};
    return answer;
}