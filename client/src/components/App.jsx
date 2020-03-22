import React from 'react';
const state = require('../state/initialState')
console.log(state)
import CheckersBoard from './CheckersBoard'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = state
    
        this.boardView = this.boardView.bind(this)
        this.handleSquareClick = this.handleSquareClick.bind(this)
        this.handleSquareClick = this.handleSquareClick.bind(this)
        this.pieceOnSquare = this.pieceOnSquare.bind(this)
    }

    componentDidMount() {
    }



    pieceOnSquare(row, col) {
        if (this.state.board[row][col].player) {
            return true
        }
        return false
    }

    whoWonGame() {
        for (let i = 0; i <this.state.board.length; i++) {
            for (let j = 0; j < this.state.board[i].length; j++) {

            }
        }
    }

    handleSquareClick(event, row, col) {
        if (this.pieceOnSquare(row, col) && !this.state.selectedSquare) {
            this.setState({selectedSquare: {row, col}})
        }
    }

    boardView() {
        return this.state.board.flat().map((square) => {
            return (
                <div>test</div>
            )
        })
    }

    render() {
        return (
            <div style = {{textAlign: 'center', fontfamily: 'Courier New'}}>
                <div style = {{marginBottom: '20px'}}>Checkers</div>
                <CheckersBoard board = {this.state.board} selectedSquare = {this.state.selectedSquare} handleSquareClick = {this.handleSquareClick}/>
                {/* <GameBanner /> */}
            </div>
        )
    }
}

export default App