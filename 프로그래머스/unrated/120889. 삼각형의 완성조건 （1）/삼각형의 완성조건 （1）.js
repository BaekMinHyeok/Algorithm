function solution(sides) {
    // const maxNum = sides.indexOf(Math.max(...sides));
    // const sumOfOtherSides  = sides.reduce((a, b, c) => (c !== maxNum) ? a + b : a, 0)
    //  if (sides[maxNum] < sumOfOtherSides ) {
    //     return 1; 
    // } else {
    //     return 2; 
    // }
    sides = sides.sort((a,b) => a-b)
    return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

 // sides = sides.sort((a,b) => a-b)
 //    return sides[0]+sides[1] > sides[2] ? 1 : 2;