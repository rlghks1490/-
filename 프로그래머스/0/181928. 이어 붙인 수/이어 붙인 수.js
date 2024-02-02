function solution(num_list) {
    let arr1 = [];
    let arr2 = [];
    for (let k of num_list) {
        k % 2 === 1 ? arr1.push(k) : arr2.push(k)
    };
    return Number(arr1.join('')) + Number(arr2.join(''));
}