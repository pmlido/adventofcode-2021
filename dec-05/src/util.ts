const fs = require("fs");

export class Util {
    public readFile(file: string) : string[] {
        var data = fs.readFileSync(file, "utf8");
        return data.split("\n"); 
    }
} 
