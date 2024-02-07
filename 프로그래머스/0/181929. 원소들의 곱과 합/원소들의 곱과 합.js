function solution(num_list) {
    const multiply = num_list.reduce((a,b) => a * b)
    const sum = num_list.reduce((a,b) => (a + b)) ** 2
    return multiply < sum ? 1 : 0
}