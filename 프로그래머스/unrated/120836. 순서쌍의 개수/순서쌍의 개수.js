function solution(n) {
  let count = 0;
  
  for (let a = 1; a <= n; a++) {
    if (n % a === 0) {
      const b = n / a;
      if (Number.isInteger(b)) {
        count++;
      }
    }
  }

  return count;
}