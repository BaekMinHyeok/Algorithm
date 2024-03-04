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
    str1 = [...str]
    str1.map(a => {
        console.log(a)
    })
});


// const solution = (str) => {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     for (let j = str.length - 1; j >= 0; j--) {
//       result += str[j][i];
//     }
//     result += "\n";
//   }

//   return result;
// };
