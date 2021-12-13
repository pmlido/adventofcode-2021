

export class Part1 {
  public processData(dataLines: string[]): number {

    let initailPositions = dataLines[0].split(',').map(Number);
    let maxPos = 0;
    initailPositions.forEach((value, i) => {
      maxPos = Math.max(maxPos, value);
    });

    let minFuel = 0;
    let pos = 0;
    for (let i = 0; i <= maxPos; i++) {
      // Calculate the fuel required for the current module
      let fuel = 0;
      initailPositions.forEach((value, j) => {
        fuel += Math.abs(value - i);
      });
      if (fuel < minFuel || minFuel === 0) {
        minFuel = fuel;
        pos = i;
      }
    }
    console.log(`Min fuel: ${minFuel} at position: ${pos}`);
    return minFuel;
  }
}