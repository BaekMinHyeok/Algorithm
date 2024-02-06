function solution(n, control) {
    // w면 n+1, s면 n-1, d면 n + 10, a면 n-10
    for(const char of control){
        if(char === "w") n+=1
        else if(char === "s") n-=1
        else if(char === "d") n+=10
        else if(char === "a") n-=10
    }
    return n
}