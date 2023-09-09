function solution(n) {

       
        var answer = 0;
        let piece = 1;
    while(true) {
        if(piece * 6 % n === 0){
            return piece;
        }
        piece = piece + 1;
    }
    
    return answer;
}



 // if(n===6){
        //     answer = 1
        // }
        // else if(n%2===0){
        //     answer = n * 3/6
        // }
        // else if(n%3===0){
        //     answer = n * 2/6
        // }
        // else if(n%6===0){
        //     answer = n/6
        // }