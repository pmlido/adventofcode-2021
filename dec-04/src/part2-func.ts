class BingoNumber {
    public n: number=0;
    public checked: boolean=false;
    constructor(n: number) {
        this.n = n;
    }
}

class Board {
    private board: BingoNumber[][]=[];
    private transposeBoard: BingoNumber[][]=[];

    public constructor (board: BingoNumber[][]) {
        this.board = board;
        this.transposeBoard = board[0].map((x,i) => board.map(x => x[i]))
    }
    
    public setNumber (n: number): void {
        for (let r=0; r < this.board[0].length; r++) {
            for (let c=0; c < this.board[r].length; c++) {
                if (this.board[r][c].n === n) {
                   this.board[r][c].checked = true; 
                   break;
                }
            }
        }
    }

    public checkBingo (): boolean {        
        for (let r=0; r < this.board[0].length; r++) {
            if (this.board[r].filter(x => x.checked).length === this.board[r].length) {
                return true;
            }
        }
        for (let r=0; r < this.transposeBoard[0].length; r++) {
            if (this.transposeBoard[r].filter(x => x.checked).length === this.transposeBoard[r].length) {
                return true;
            }
        }
        return false;
    }

    public sumUnchecked (): number {
        var sum = 0;
        for (let r=0; r < this.board[0].length; r++) {
            for (let c=0; c < this.board[r].length; c++) {
                if (!this.board[r][c].checked) {
                    sum += this.board[r][c].n;
                }
            }
        }
        return sum;
    }
}

export class Part2Func {
    public processData(drawingsLines: string[], boardsLines: string[]) : number {

        const drawings = drawingsLines[0].split(',').map(Number);

        var boards: Board[] = []; 
        var board: BingoNumber[][] = [];
        for (let i = 0; i < boardsLines.length; i++) {
            if (boardsLines[i].length === 0) {
                // next board
                if (board.length > 0) {
                    boards.push(new Board(board));
                }
                board = [];
            } else {
                const boardRow : BingoNumber[] = [];
                boardsLines[i].trim().split(' ')
                   .filter(x => x.length > 0)
                   .map(Number)
                   .forEach(n => boardRow.push(new BingoNumber(n)));

                board.push(boardRow);
            }
        }   
        if (board.length > 0) {
            boards.push(new Board(board));
        }
        return this.draw(drawings, boards);
    }

    private draw(drawings: number[], boards: Board[]) : number {

        var boardsWithBingo: number[] = [];
        for (let d = 0; d < drawings.length; d++) {
            for (let b = 0; b < boards.length; b++) {
                if (boardsWithBingo.indexOf(b) === -1) {
                    boards[b].setNumber(drawings[d]);
                    if (boards[b].checkBingo()) {
                        boardsWithBingo.push(b);
                        if(boardsWithBingo.length === boards.length) {
                            return boards[b].sumUnchecked() * drawings[d];
                        }
                    }
                }
            }
        }
        return 0;
    }
} 
