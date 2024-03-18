function solution(n) {
    let result = [];
    for(let i = 1; i <= n; i++){
         i % 2 === 0 ? result.push("박") : result.push("수")
    }
    return result.join("")
}