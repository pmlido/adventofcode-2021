const fs = require("fs");

fs.readFile("./input.txt", "utf8", (_err: any, data: string) => {

    const lines = data.split("\n"); 
    const matrix = lines.map(line => line.split("").map(Number)); 

    console.log(matrix);
    console.log("length: ", matrix.length);

    const transpose = matrix[0].map((x,i) => matrix.map(x => x[i]))
    console.log(transpose);
    console.log("length: ", transpose.length);

    var row = transpose.length;
    var gamma = 0;
    var epsilon = 0;
    transpose.forEach(line => { 
        row--
        if (line.filter(x => x === 1).length > line.length / 2) {
            gamma += 2**row;
        } else {   
            epsilon += 2**row;
        }
    })   
    console.log("gamma: ", gamma);
    console.log("epsilon: ", epsilon);  
    console.log("consumption: ", gamma * epsilon );

});
