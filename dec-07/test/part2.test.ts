import { Util } from "../src/util";
import { Part2 } from "../src/part2";

test('process data part2', () => {

    let util = new Util();
    let p = new Part2();

    var dataLines = util.readFile("./test.txt");

    var result = p.processData(dataLines);
    expect(result).toBe(168);
  });