function solution(array) {
//   // 주어진 배열을 오름차순으로 정렬합니다.
//   const sortedArray = array.sort((a, b) => a - b);
  
//   // 중앙 인덱스를 계산합니다.
//   const middleIndex = Math.floor(sortedArray.length / 2);
  
//   // 중앙값을 반환합니다.
//   return sortedArray[middleIndex];
    
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
