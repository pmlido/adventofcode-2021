import { Util } from "./util";
import { Part1Func } from "./part1-func";

let util = new Util();
let p1 = new Part1Func();

var drawings = util.readFile("./input-draw.txt");
var boards = util.readFile("./input-boards.txt");

var result = p1.processData(drawings, boards);
console.log("Result =", result);