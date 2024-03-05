function solution(a, b, c) {
  const sum = a + b + c;
    const squares = (a ** 2) + (b ** 2) + (c ** 2)
    const cubes = (a ** 3) + (b ** 3) + (c ** 3)
  return a === b && b === c ? sum * squares * cubes 
  : a === b || b === c || a === c ? sum * squares : sum;
}
