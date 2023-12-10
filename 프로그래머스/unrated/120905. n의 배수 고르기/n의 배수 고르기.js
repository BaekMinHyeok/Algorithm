function solution(n, numlist) {
    return numlist.filter(s => s % n === 0)
}