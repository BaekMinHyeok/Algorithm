function solution(myString) {
    const result = [];
    let currentLength = 0;
    
    for(let char of myString) {
        if(char === 'x') {
            result.push(currentLength);
            currentLength = 0;
        } else {
            currentLength++
        }
    }
    result.push(currentLength)
    return result
}