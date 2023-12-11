function solution(cipher, code) {
    return [...cipher].filter((a,s)=> (s+1) % code === 0).join("")
}