function solution(hp) {

  const generalAnt = 5;
  const soldierAnt = 3;
  const workerAnt = 1;
  
  let generalAnts = 0;
  let soldierAnts = 0;
  let workerAnts = 0;
  

  while (hp > 0) {
    if (hp >= generalAnt) {
      hp -= generalAnt;
      generalAnts++;
    } else if (hp >= soldierAnt) {
      hp -= soldierAnt;
      soldierAnts++;
    } else {
      hp -= workerAnt;
      workerAnts++;
    }
  }
  

  const totalAnts = generalAnts + soldierAnts + workerAnts;
  return totalAnts;
}


