function solution(num_str) {
    const num = num_str.split('').map(Number)
    return num.reduce((a,c) => a + c, 0)
}