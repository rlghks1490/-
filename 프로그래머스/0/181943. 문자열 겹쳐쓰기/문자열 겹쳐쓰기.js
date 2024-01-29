function solution(my_string, overwrite_string, s) {
    let answer = '';
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < my_string.length; i++) {
        arr1[i] = my_string[i];
    };
     for (let i = 0; i < overwrite_string.length; i++) {
        arr2[i] = overwrite_string[i];
    };
    for (let i = 0; i < overwrite_string.length; i++) {
        arr1.splice(s+i, 1, arr2[i]);
    };
    
    answer = arr1.join('');
    return answer;
}