function solution(arr1, arr2) {
    if(arr1.length !== arr2.length){
      return arr1.length > arr2.length ? 1 : -1;
    } 
    const sumArr1 = arr1.reduce((a,b) => a + b,0);
    const sumArr2 = arr2.reduce((a,b) => a + b,0);
    if(sumArr1 !== sumArr2){
        return sumArr1 > sumArr2 ? 1 : -1;
    }
    
    return 0;
}