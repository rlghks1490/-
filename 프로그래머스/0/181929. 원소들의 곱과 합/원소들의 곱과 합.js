function solution(num_list) {
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < num_list.length; i++) {
        num1 += num_list[i];
        };
    num1 = num1 ** 2
    num2 = num_list.reduce((acc, num) => acc * num)
    return num1 > num2 ? 1 : 0;
}