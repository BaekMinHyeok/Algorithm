function solution(absolutes, signs) {
    let num = 0
    for(let i = 0; i < signs.length; i++){
        if(signs[i] === true){
             num += absolutes[i]
        } else {
            num += absolutes[i] * -1
        }
    }
    return num
}