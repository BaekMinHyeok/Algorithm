// function solution(n) {
//   let sum = 0;
//     for(let i = 2; i <= n; i += 2){
//         sum += i;
//     }
//     return sum;
// }

function solution(n) {
    const half = ~~(n/2)
    return half *(half + 1)
}

// function solution(n) {
//     const half = Math.floor(n/2);
//     return half*(half+1);
// }