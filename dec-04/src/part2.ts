import { Util } from "./util";
import { Part2Func } from "./part2-func";

let util = new Util();
let p1 = new Part2Func();

var drawings = util.readFile("./input-draw.txt");
var boards = util.readFile("./input-boards.txt");

var result = p1.processData(drawings, boards);
console.log("Result =", result);