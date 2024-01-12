function solution(order) {
    return [...String(order)].filter((n)=>["3","6","9"].includes(n)).length
}