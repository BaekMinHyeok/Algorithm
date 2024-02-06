function solution(a, b) {
    const paste = parseInt(`${a}${b}`,10)
    const multiply = 2 * a * b
    return paste >= multiply ? paste : multiply
}