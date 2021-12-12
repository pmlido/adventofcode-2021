import { match } from "assert";

class Point {
    constructor(public readonly x: number, public readonly y: number) {}
}

class Line {

    constructor(public readonly from: Point, public readonly to: Point) {}

    public getPoints(): Point[] {    
        var points : Point[] = [];
        if (this.from.x === this.to.x) {
            var yMin = Math.min(this.from.y, this.to.y);
            var yMax = Math.max(this.from.y, this.to.y);
            for (var y = yMin; y <= yMax; y++) {
                points.push(new Point(this.from.x, y));
            }
        } else if (this.from.y === this.to.y) {
            var xMin = Math.min(this.from.x, this.to.x);
            var xMax = Math.max(this.from.x, this.to.x);
            for (var x = xMin; x <= xMax; x++) {
                points.push(new Point(x, this.from.y));
            }
        } else if (Math.abs(this.from.x - this.to.x) === Math.abs(this.from.y - this.to.y)) {
            let p0 = this.from.x < this.to.x ? this.from : this.to;
            let p1 = this.from.x < this.to.x ? this.to : this.from;
            let y = p0.y;
            for (var x = p0.x; x <= p1.x; x++) {
                points.push(new Point(x, y));
                y = p1.y > p0.y ? y + 1 : y - 1;
            }
        }
        return points;
    }
}

export class Part2 {

  private addPoint(matrix: Map<string, number>, point: Point) {
    let key = point.x + "," + point.y;
    let value = matrix.get(key);
    if (value === undefined) {
        matrix.set(key, 1);
    } else {   
        matrix.set(key, value + 1);
    }
  }

  public processData(textLines: string[]): number {
    var lines : Line[] = [];
    let matrix = new Map<string, number>();   
            
    textLines.forEach(line => {
        var parts = line.split("->");
        var from = parts[0].split(",");
        var to = parts[1].split(",");
        lines.push(new Line(new Point(+from[0], +from[1]), new Point(+to[0], +to[1])));
    });

    lines.forEach(line => {
        line.getPoints().forEach(point => {
            this.addPoint(matrix, point);
        });
    });

    let count = 0;
    matrix.forEach((value, key) => {
        if (value > 1) {
            count++;
        }
    });
    return count;
  }
}