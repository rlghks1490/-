function solution(ineq, eq, n, m) {
    if (ineq === ">" && eq === "=") {
        answer = n >= m ? 1 : 0;
    }
    else if (ineq === "<" && eq === "=") {
        answer = n <= m ? 1 : 0;
    }
    else if (ineq === ">" && eq === "!") {
        answer = n > m ? 1 : 0;
    }
    else if (ineq === "<" && eq === "!") {
        answer = n < m ? 1 : 0;
    };
    return answer;
}