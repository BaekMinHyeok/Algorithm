

function solution(array, n) {
  // 배열 내에서 n과 같은 원소의 개수를 저장할 변수를 초기화합니다.
  let count = 0;

  // 배열을 순회하면서 n과 같은 원소를 찾고, count를 증가시킵니다.
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      count++;
    }
  }

  // count를 반환합니다.
  return count;
}
