function solution(n) {
    const str = String(n)
    const result = Array.from(str).sort((a,b)=> b - a).join("")
    return Number(result)
}