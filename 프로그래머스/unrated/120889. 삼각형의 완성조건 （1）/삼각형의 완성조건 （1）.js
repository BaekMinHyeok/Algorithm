function solution(sides) {
    const maxNum = sides.indexOf(Math.max(...sides));
    const sumOfOtherSides  = sides.reduce((a, b, c) => (c !== maxNum) ? a + b : a, 0)
     if (sides[maxNum] < sumOfOtherSides ) {
        return 1; 
    } else {
        return 2; 
    }
}