function solution(num_list) {
    const n = num_list.slice().sort((a,b) => a-b)
    if(n.length <= 5){
        return []
    }
    return n.slice(5)
}