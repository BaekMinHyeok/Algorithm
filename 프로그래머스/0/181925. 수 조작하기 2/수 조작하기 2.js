function solution(numLog) {
    w : + 1
    s : - 1
    d : + 10
    a : - 10
    
    let answer = "";
    let currentNum = numLog[0];
    
    for(let i = 0; i < numLog.length; i++) {
        const num = numLog[i];
        const diff = num - currentNum;
        
        if(Math.abs(diff) === 1) {
            if(diff > 0) {
                answer += "w";
                currentNum += 1;
            } else {
                answer += "s";
                currentNum -= 1;
            }
        } else if(Math.abs(diff) === 10){
            if(diff > 0) {
                answer += "d";
                currentNum += 10;
            } else {
                answer += "a";
                currentNum -= 10;
            }
        }
    }
    return answer;
}