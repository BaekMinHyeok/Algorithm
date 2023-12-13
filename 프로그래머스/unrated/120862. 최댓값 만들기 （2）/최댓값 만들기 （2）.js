function solution(numbers) {
    numbers.sort((a, b) => b - a);
    const maxProduct = Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
    
    return maxProduct;


}