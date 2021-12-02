const fs = require("fs");
const internal = require("stream");

function calcWindow(l1: string, l2: string, l3: string): number {
  return parseInt(l1) + parseInt(l2) + parseInt(l3);
}

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) throw err;

  var inc = 0;
  const lines = data.split("\n");
  for (let i = 3; i < lines.length; i++) {
    const w0 : number = calcWindow(lines[i - 3], lines[i - 2], lines[i - 1]);
    const w1 : number = calcWindow(lines[i - 2], lines[i - 1], lines[i]);
    if (w1 > w0) {
      inc++;
      console.log("inc++ for " + lines[i]);
    } else {
      console.log("inc not incremented for " + lines[i]);
    }
  }
  console.log(`inc=${inc}`);
});
