function solution(n, k) {
   //10인분 = + 음료수 1개
    //양꼬치 1인분 = 12,000원
    //음료수 1개 = 2,000원
    //양꼬치 n인분 , 음료수 k개
    const sheep = 12000;
    const drink = 2000; 
    const serviceDrink = Math.floor(n/10);
    
    const total = n * sheep + (k - serviceDrink) * 2000;
    
    return total
    
}