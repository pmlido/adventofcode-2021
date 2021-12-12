
class Fish
{
  constructor(public timer: number) {}


}
export class Part1 {
  public processData(dataLines: string[]): number {
    
    let initialStates = dataLines[0].split(',');
    let fishes : Fish[] = [];
    
    for (let i = 0; i < initialStates.length; i++) {
      fishes.push(new Fish(parseInt(initialStates[i])));
    }

    for (let day = 1; day <= 80; day++) {
      let newFishes : Fish[] = [];
      fishes.forEach(fish => {
        fish.timer--;
        if(fish.timer < 0){
          fish.timer = 6;
          newFishes.push(new Fish(8));
        } 
      });
      newFishes.forEach(fish => fishes.push(fish));
    }

    return fishes.length;

  }
}