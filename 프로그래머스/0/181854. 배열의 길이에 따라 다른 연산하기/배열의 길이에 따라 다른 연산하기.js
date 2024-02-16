function solution(arr, n) {
    // return arr.length % 2 !== 0 
    //     ? arr.map((e,i) => (i % 2 === 0 ? i + n : i)) 
    //     : arr.map((e,i) => (i % 2 !== 0 ? i + n : i))
    
    return arr
        .map((e,i) => (arr.length % 2 !== 0 ? i % 2 === 0 : i % 2 !== 0) ? e + n : e)
        
}