const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
        console.log(arr[i]);
    };
});