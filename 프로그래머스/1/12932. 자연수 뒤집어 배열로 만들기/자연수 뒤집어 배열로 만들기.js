function solution(n) {
    const arr = String(n).split("")
    return arr.map((a)=> Number(a)).reverse()
}