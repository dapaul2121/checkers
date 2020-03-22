
const createInitialBoardState = () => {
    const boardState = []
    for (let i = 0; i < 8; i++) {
        let newRow = []
        for (let j = 0; j < 8; j++) {
            newRow.push(generateSquare(i,j))
        }
        boardState.push(newRow)
    }
    return boardState
}

const generateSquare = (i,j) => {
    const id = i * 8 + j
    let offset = 0
    if (i % 2 === 0) {
        offset = 1
    }
    let row = i 
    let col = j
    let player = null
    let isKing = false
    if (i < 3) {
        if ((j + offset) % 2 === 0) {
            player = 1
        }
    }
    if (i > 4) {
        if ((j + offset) % 2 === 0) {
            player = 2
        }
    }
    return {row, col, player, id, isKing, isSelected: false}

}

const generateState = () => {
    return {board: createInitialBoardState(), selectedSquare: null, player1Turn: true}

}

module.exports = generateState()