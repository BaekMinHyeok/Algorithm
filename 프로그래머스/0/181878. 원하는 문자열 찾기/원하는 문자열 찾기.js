function solution(myString, pat) {
    const low = myString.toLowerCase()
   return low.includes(pat.toLowerCase()) ? 1 : 0
}