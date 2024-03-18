function solution(s) {
    const result = s.split("")
    const h = Math.ceil(s.length / 2 ) -1
    return s.length % 2 === 0 ?result.splice(h,2).join("") : result.splice(h,1).join("")
}