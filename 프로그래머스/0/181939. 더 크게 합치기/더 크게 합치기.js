function solution(a, b) {
    const str = String(a) + String(b)
    const str2 = String(b) + String(a)
    return str >= str2 ? Number(str) : Number(str2) 
}