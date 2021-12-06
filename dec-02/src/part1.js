var fs = require("fs");
fs.readFile("./input.txt", "utf8", function (err, data) {
    if (err)
        throw err;
    // console.log(data);
    var lines = data.split("\n");
    var h = 0;
    var d = 0;
    lines.forEach(function (line) {
        // console.log(line);
        var words = line.split(" ");
        if (words[0] === "forward") {
            h = h + parseInt(words[1]);
            console.log("forward " + words[1] + " h=" + h);
        }
        else if (words[0] === "down") {
            d = d + parseInt(words[1]);
            console.log("down " + words[1] + " d=" + d);
        }
        else if (words[0] === "up") {
            d = d - parseInt(words[1]);
            console.log("up " + words[1] + " d=" + d);
        }
    });
    console.log("h=" + h + " d=" + d + " result = " + (h * d));
});
