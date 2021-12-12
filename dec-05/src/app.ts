import { Util } from "./util";
import { Part1 } from "./part1";
import { Part2 } from "./part2";

let util = new Util();
let p1 = new Part1();
let p2 = new Part2();

var dataLines = util.readFile("./input.txt");

var result1 = p1.processData(dataLines);
console.log("Result part1 =", result1);
 
var result2 = p2.processData(dataLines);
console.log("Result part2 =", result2);
