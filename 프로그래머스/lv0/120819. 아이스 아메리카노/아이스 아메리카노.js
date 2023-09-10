function solution(money) {
    const ice = 5500;
    const coffee = Math.floor(money / ice)
    const remainMoney = money % ice
    
    return [coffee, remainMoney] 
}