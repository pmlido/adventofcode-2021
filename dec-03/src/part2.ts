const fs2 = require("fs");

fs2.readFile("./input.txt", "utf8", (_err: any, data: string) => {

    const lines = data.split("\n"); 
    const matrix = lines.map(line => line.split("").map(Number)); 

    console.log(matrix);
    console.log("length: ", matrix.length);

    const transpose = matrix[0].map((x,i) => matrix.map(x => x[i]))
    console.log(transpose);
    console.log("length: ", transpose.length);

    var row = 0;
    var oxygen :number[] = Array.from(Array(matrix.length).keys());
    var co2scrubber :number[] = Array.from(Array(matrix.length).keys());

    console.log(`oxygen=`, oxygen);   

    for (var n=0; n<transpose.length; n++) { 
        var line = transpose[n];
        var ones = [];
        var zeros = [];
        for (var i = 0; i < line.length; i++) {
            if (oxygen.indexOf(i) != -1) {
                if (line[i] == 1) {
                    ones.push(i);
                } else if (line[i] == 0) {  // 0 is the default value
                    zeros.push(i);
                }  
            }
        }        
        oxygen = ones.length >= zeros.length ? [...ones] : [...zeros];
        console.log(`n=${n} oxygen=`, oxygen);   

        if (oxygen.length === 1) {
            break;
        }
    }
    for (var n=0; n<transpose.length; n++) { 
        var line = transpose[n];
        var ones = [];
        var zeros = [];
        for (var i = 0; i < line.length; i++) {
            if (co2scrubber.indexOf(i) != -1) {
                if (line[i] == 1) {
                    ones.push(i);
                } else if (line[i] == 0) {  // 0 is the default value
                    zeros.push(i);
                }  
            }
        }        
        co2scrubber = ones.length < zeros.length ? [...ones] : [...zeros];
        console.log(`n=${n} co2scrubber=`, co2scrubber);   

        if (co2scrubber.length === 1) {
            break;
        }
    }

    console.log("oxygen: ", oxygen);   
    console.log("oxygen value:", parseInt(lines[oxygen[0]],2));
    console.log("co2scrubber: ", co2scrubber);   
    console.log("co2scrubber value:", parseInt(lines[co2scrubber[0]],2));

    console.log("product: ", parseInt(lines[oxygen[0]],2)*parseInt(lines[co2scrubber[0]],2));
});



