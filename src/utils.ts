export const getDefaultBoard = () => [Array(3).fill(''), Array(3).fill(''), Array(3).fill('')];
export const oppositePlayer = (player: string) => player.toUpperCase() === 'X' ? 'O' : 'X';

export const getWinner = (ent: Array<Array<any>>) => {
    let winnerMap = ent.map((i) => i.map((t: any) => t.toLowerCase()))
    for (let i = 0; i < 3; i++) {
        const isRowXWinning = winnerMap[i].every((cell: any) => cell === "x");
        const isRowOWinning = winnerMap[i].every((cell: any) => cell === "o");
        if (isRowXWinning) {
            return "x";
        }
        if (isRowOWinning) {
            return "o";
        }
    }
    for (let col = 0; col < 3; col++) {
        let isColumnXWinner = true;
        let isColumnOWinner = true;

        for (let row = 0; row < 3; row++) {
            if (winnerMap[row][col] !== "x") {
                isColumnXWinner = false;
            }
            if (winnerMap[row][col] !== "o") {
                isColumnOWinner = false;
            }
        }

        if (isColumnXWinner) {
            return "x";
        }
        if (isColumnOWinner) {
            return "o";
        }
    }

    let isDiagonal1OWinning = true;
    let isDiagonal1XWinning = true;
    let isDiagonal2OWinning = true;
    let isDiagonal2XWinning = true;
    for (let i = 0; i < 3; i++) {
        if (winnerMap[i][i] !== "o") {
            isDiagonal1OWinning = false;
        }
        if (winnerMap[i][i] !== "x") {
            isDiagonal1XWinning = false;
        }

        if (winnerMap[i][2 - i] !== "o") {
            isDiagonal2OWinning = false;
        }
        if (winnerMap[i][2 - i] !== "x") {
            isDiagonal2XWinning = false;
        }
    }

    if (isDiagonal1OWinning || isDiagonal2OWinning) {
        return "o";
    }
    if (isDiagonal1XWinning || isDiagonal2XWinning) {
        return "x";
    }
    return null;
};