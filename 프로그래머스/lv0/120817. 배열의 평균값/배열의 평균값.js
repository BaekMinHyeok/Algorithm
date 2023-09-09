function solution(numbers) {
    const redu = (a,b) => a+b
    const addNumber = numbers.reduce(redu)
    const answer = addNumber/numbers.length
        if(String(answer).includes(".5")){
            return answer
        }
        else if(!String(answer).includes(".")){
            return answer+".0"
        }
        else{
            return;
        }
}