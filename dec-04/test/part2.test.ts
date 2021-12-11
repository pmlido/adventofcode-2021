import { Util } from "../src/util";
import { Part2Func } from "../src/part2-func";

test('process data part2', () => {

    let util = new Util();
    let p1 = new Part2Func();

    var drawings = util.readFile("./test-draw.txt");
    var boards = util.readFile("./test-boards.txt");

    var result = p1.processData(drawings, boards);
    expect(result).toBe(1924);
  });