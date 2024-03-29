// function solution(number) {
//   let count = 0
//   for(let i = 0; i < number.length; i++){
//       for(let j = i + 1; j < number.length; j++){
//           for(let k = j + 1; k < number.length; k++){
//               if(number[i] + number[j] + number[k] === 0){
//                   count++
//               }
//           }
//       }
//   }
//     return count
// }

    function solution(number){
        let result = 0
        
        const combination = (current, start) => {
            if(current.length === 3){
                result += current.reduce((acc, cur)=> acc + cur,0) === 0 ? 1 : 0
            }
            for(let i = start; i < number.length; i++){
                combination([...current, number[i]], i + 1)
            }
        }
        combination([],0);
        return result
    }