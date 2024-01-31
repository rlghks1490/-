function solution(n) {
    let answer = 0
    if (n % 2=== 1) {
        for (let i = 0; i <= n/2; i++) {
            answer += (2*i + 1)
        }
    } else {
        for (let i =1; i <= n/2; i++) {
            answer += (2*i) ** 2
        }
    }
    return answer;
}