function solution(myString, pat) {
    const change = myString.split('').map((a)=> a === "A" ? "B" : "A").join('')
    
    return change.includes(pat) ? 1 : 0
}