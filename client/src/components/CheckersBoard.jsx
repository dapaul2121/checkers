import React from 'react';

const CheckersBoard = (props) => {
    console.log(props)
    const isSelectedSquare = (selectedSquare, square) => {
        console.log(selectedSquare)
        console.log(square)
        if (!selectedSquare) {
            return false
        }
        if (selectedSquare.row === square.row && selectedSquare.col === square.col) {
            return true
        }
        return false

    }
    const makeCheckersBoard = (board) => {
        return board.flat().map((square) => {
        let display, background
        let color = 'black'
        if (isSelectedSquare(props.selectedSquare, square)) {
            background = 'yellow'
        }
        if (square.player === 1) {
            color = 'red'
        }
        if (square.player && board.isKing) {
            display = 'K'
        } else if (square.player) {
            display = 'X'
        } 
        return (
            <div style = {{color, background, border: 'solid 1px gray', textAlign: 'center'}} onClick = {() => props.handleSquareClick(event, square.row, square.col)}>{display}</div>
        )
    })
    }

    return (
        <div style= {{display: 'grid', justifyContent: 'center', gridTemplateColumns: '30px 30px 30px 30px 30px 30px 30px 30px', gridTemplateRows: '30px 30px 30px 30px 30px 30px 30px 30px'}}>
            {makeCheckersBoard(props.board)}
        </div>
    )
}

export default CheckersBoard