function solution(s){
    const arr = s.toLowerCase().split("")
    const p = arr.filter((a) => a === "p").length
    const y = arr.filter((a) => a === "y").length
    
    return p === y ? true : false
}