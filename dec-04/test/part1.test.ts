import { Util } from "../src/util";
import { Part1Func } from "../src/part1-func";

test('process data part1', () => {

    let util = new Util();
    let p1 = new Part1Func();

    var drawings = util.readFile("./test-draw.txt");
    var boards = util.readFile("./test-boards.txt");

    var result = p1.processData(drawings, boards);
    expect(result).toBe(4512);
  });