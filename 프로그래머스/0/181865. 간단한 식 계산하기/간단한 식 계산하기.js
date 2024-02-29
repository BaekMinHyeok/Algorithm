const ops = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b
}

function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    
    return ops[op](+a, +b)
    
    
    
    
//     const arr = binomial.split(' ');
    
//     const a = parseInt(arr[0])
//     const op = arr[1]
//     const b = parseInt(arr[2])
    
//     switch(op){
//         case "+":
//                 return a + b;
//         case "-":
//                 return a - b;
//         case "*":
//                 return a * b;
//         default:
//             throw new Error("error")
//     }
    
}