function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var denom3 = denom1 * denom2;
    var numer3 = numer1 * denom2 + numer2 * denom1;
    for(var i=1; i<=numer3;i++){
        if(numer3 % i === 0 && denom3 % i === 0){
            maximun = i
        }
        
    }
    
    return [numer3/maximun, denom3/maximun];
}