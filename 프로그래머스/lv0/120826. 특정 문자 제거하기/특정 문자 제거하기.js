function solution(my_string, letter) {
    const answerArray = my_string.split('').filter(char => char !==letter);
    const answer = answerArray.join('');
    return answer
}