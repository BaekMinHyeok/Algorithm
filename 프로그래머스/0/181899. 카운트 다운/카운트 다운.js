function solution(start, end_num) {
    const arr = []
    for(let i = start; i >= end_num; i--){
        arr.push(i)
    }
    return arr
}