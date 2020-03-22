const state = require('../state/initialState')

const copyBoard = (board) => {
    newBoard = []
    for (let i = 0; i < board.length; i++) {
        let newRow = []
        for (let j = 0; j < board[i].length; j++) {
            newRow.push(board[i][j])
        }
    }
    return newBoard
}

const emptySquare = (row, col, board) => {
    

}



const getMovableVerticalDirecton = (player1Turn) => {
    if (player1Turn === true) {
        return -1
    }
    return 1
}



const getSquareSingleMoves = (row, col, state) => {
    const player1Turn = state.player1Turn
    // const player
    // if (player1Turn === true) {
    //     player = 1
    // } else {
    //     player = 2
    // }
    const board = state.board
    let moves = [[row + getMovableVerticalDirecton(player1Turn), col + 1], [row + getMovableVerticalDirecton(player1Turn), col - 1]]
    if (state.board[row][col].isKing === true) {
        moves.concat([[row - getMovableVerticalDirecton(player1Turn), col + 1], [row - getMovableVerticalDirecton(player1Turn), col - 1]])
    }

    for (let i = 0; i < moves.length; i++) {
        if (board[moves[i][0]]) {
            if (!board[moves[i][0]][moves[i][1]]) {
                let newBoard = copyBoard(board)

            }
        }
    }


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
        if (square.player = player) {
            allPieces.push(square)
        }
    })
    return allPieces
}



const nextBoardStates = (state) => {
    return null
}

console.log(getPlayerPieces(state))


module.exports.nextBoardStates = nextBoardStates
// module.exports.getPlayerPieces = getPlayerPieces