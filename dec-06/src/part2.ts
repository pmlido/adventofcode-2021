

export class Part2 {
  public processData(dataLines: string[]): number {
    
    let initialStates = dataLines[0].split(',');
    let fishesWithDaysOld: Map<number, number> = new Map<number, number>();
    for (let i = 0; i <= 8; i++) {
      fishesWithDaysOld.set(i, 0);
    }

    for (let i = 0; i < initialStates.length; i++) {
      const days = parseInt(initialStates[i]);
      let count = fishesWithDaysOld.get(days);
      fishesWithDaysOld.set(days, count? (count + 1): 1);
    }

    for (let day = 1; day <= 256; day++) {
      let count0 = fishesWithDaysOld.get(0) ? fishesWithDaysOld.get(0) : 0;
      for (let d = 0; d < 8; d++) {
        let count = fishesWithDaysOld.get(d+1) ? fishesWithDaysOld.get(d+1) : 0;
        if (d === 6) {
          fishesWithDaysOld.set(d, count! + count0!); 
        } else {  
          fishesWithDaysOld.set(d, count!); 
        }

      }
      fishesWithDaysOld.set(8, count0!);
    }

    let result = 0;
    fishesWithDaysOld.forEach((value, key) => { result += value; });
    return result;

  }
}