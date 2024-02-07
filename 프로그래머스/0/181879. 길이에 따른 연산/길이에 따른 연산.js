function solution(num_list) {
    // num_list.length >= 11 이면 모든원소의 합
    // num_list.length <= 10 이면 모든원소의 곱
    const l = num_list.length;
    return l >= 11 ? num_list.reduce((a,b) => a + b) : num_list.reduce((a,b) => a * b);
}