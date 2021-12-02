var fs = require("fs");
var internal = require("stream");
function calcWindow(l1, l2, l3) {
    return parseInt(l1) + parseInt(l2) + parseInt(l3);
}
fs.readFile("./input.txt", "utf8", function (err, data) {
    if (err)
        throw err;
    var inc = 0;
    var lines = data.split("\n");
    for (var i = 3; i < lines.length; i++) {
        var w0 = calcWindow(lines[i - 3], lines[i - 2], lines[i - 1]);
        var w1 = calcWindow(lines[i - 2], lines[i - 1], lines[i]);
        if (w1 > w0) {
            inc++;
            console.log("inc++ for " + lines[i]);
        }
        else {
            console.log("inc not incremented for " + lines[i]);
        }
    }
    console.log("inc=".concat(inc));
});
