function solution(my_string) {
    return [...my_string].reduce((a,b) => Number(b) ? + a + + b : a,0)
}