function solution(price, money, count) {
    let result = 0
    for(let n = 1; n <= count; n++){
         result += price * n    
    }
    return money < result ? result - money : 0
    
    // money < 사용금액 ? 사용금액 - money : 0
}