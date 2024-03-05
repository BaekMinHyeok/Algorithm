function solution(myString) {
    return Array.from(myString.split("x")).filter((a) => a).sort()
}