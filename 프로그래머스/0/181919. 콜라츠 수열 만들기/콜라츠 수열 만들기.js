function solution(n) {
    const arr = [n]
    for(;n > 1;){
        n = n % 2 == 0 ? n / 2 : 3 * n + 1;
        arr.push(n)
    }
    return arr
}