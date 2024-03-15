function solution(numbers) {
    const sumArray = new Array(10).fill(0)
    numbers.forEach((n)=> sumArray[n]--)
    let answer = 0;
    for(let i = 0; i < 10; i++){
        if(sumArray[i] === 0){
            answer += i;
        }
    }
    return answer
}