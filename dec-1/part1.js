const fs = require("fs");
const internal = require("stream");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) throw err;
  // console.log(data);

  var inc = 0;
  const lines = data.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (i != 0 && parseInt(lines[i]) > parseInt(lines[i - 1])) {
      inc++;
      console.log("inc++ for " + lines[i]);
    } else {
      console.log("inc not incremented for " + lines[i]);
    }
  }
  console.log(`inc=${inc}`);
});
