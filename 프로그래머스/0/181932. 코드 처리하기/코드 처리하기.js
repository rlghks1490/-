function solution(code) {
    let mode = 0;
    let ret = '';
    for (let i = 0; i < code.length; i++) {
        if (mode === 0) {
            code[i] !== '1' && i % 2 === 0 ? ret += code[i] : ret += ''
            code[i] === '1' ? mode = 1 : mode = 0
        }
        else if (mode === 1) {
            code[i] !== '1' && i % 2 === 1 ? ret += code[i] : ret += ''
            code[i] === '1' ? mode = 0 : mode = 1
        }
    }
    return ret !== '' ? ret : 'EMPTY';
}
