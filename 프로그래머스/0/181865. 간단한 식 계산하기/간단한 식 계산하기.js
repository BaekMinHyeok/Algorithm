function solution(binomial) {
    const num = binomial.split(' ');
    
    const a = parseInt(num[0]);
    const op = num[1];
    const b = parseInt(num[2]);

    switch(op){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            throw new Error('error')
    }
}