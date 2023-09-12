// function solution(my_string, n) {
//     let answer = "";
//     for (let i = 0; i < my_string.length;i++){
//         for(let j = 0; j < n; j++) {
//             answer += my_string.charAt(i)
//         }
//     }
//     return answer
// }

function solution(my_string, n) {
    const answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}