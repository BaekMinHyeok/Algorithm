function solution(seoul) {
    let str = []
    for(let i = 0; i < seoul.length; i++){
        if(seoul[i] === "Kim"){
            str.push(i)
        }
    }
    return `김서방은 ${str.join("")}에 있다`
}