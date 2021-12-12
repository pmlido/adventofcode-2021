import { Util } from "../src/util";
import { Part1 } from "../src/part1";

test('process data part1', () => {

    let util = new Util();
    let p1 = new Part1();

    var dataLines = util.readFile("./test.txt");

    var result = p1.processData(dataLines);
    expect(result).toBe(5);
  });