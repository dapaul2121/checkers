const state = require('../state/initialState')

const copyBoard = (board) => {
    newBoard = []
    for (let i = 0; i < board.length; i++) {
        let newRow = []
        for (let j = 0; j < board[i].length; j++) {
            newRow.push(Object.assign({}, board[i][j]))
        }
        newBoard.push(newRow)
    }
    return newBoard
}

const emptySquare = (row, col, board) => {
    const square = board[row][col]
    return {row: square.row, col: square.col, player: null, isKing: null, isSelected: false}
}



const getMovableVerticalDirecton = (player1Turn) => {
    if (player1Turn === true) {
        return 1
    }
    return -1
}



const getSquareSingleMoves = (row, col, state) => {
    const player1Turn = state.player1Turn
    const board = state.board
    let moves = [[row + getMovableVerticalDirecton(player1Turn), col + 1], [row + getMovableVerticalDirecton(player1Turn), col - 1]]
    if (state.board[row][col].isKing === true) {
        moves.concat([[row - getMovableVerticalDirecton(player1Turn), col + 1], [row - getMovableVerticalDirecton(player1Turn), col - 1]])
    }

    let newBoards = []

    for (let i = 0; i < moves.length; i++) {
        let newRow = moves[i][0]
        let newCol = moves[i][1]
        if (board[newRow]) {
            if (board[newRow][newCol].player === null) {
                let newBoard = copyBoard(board)
                newBoard[newRow][newCol] = Object.assign({}, board[row][col])
                newBoard[row][col] = emptySquare(row, col, board)
                newBoards.push(newBoard)
            }
        }
    }
    return newBoards
}

const getPlayerPieces = (state) => {
    const player1Turn = state.player1Turn
    let player
    const board = state.board
    if (player1Turn) {
        player = 1
    } else {
        player = 2
    }
    const allPieces = []
    board.flat().map((square) => {
        if (square.player === player) {
            allPieces.push(square)
        }
    })
    return allPieces
}



const nextBoardStates = (state) => {
    return null
}

// console.log(getPlayerPieces(state))
console.log(getSquareSingleMoves(2, 1, state))


module.exports.nextBoardStates = nextBoardStates
// module.exports.getPlayerPieces = getPlayerPieces