// Gameboard Module

const gameboard = (() => {

    const rows = 3;
    const columns = 3;
    const board = []


    for (let i = 0; i < rows; i ++) {
        board[i] = []

        for(let j = 0; j < columns; j++) {
            board[i].push("X")
        }

    }

    const render = () => {
        let j = 0
        let n = 0
    
        for (let i = 0; i < 9; i++) {
            if(i % 3 === 0 && i !== 0) {
            j++
            n = 0}

            const tile = document.getElementById(`tile${i}`)
            tile.innerText = board[j][n]
            n++
        }
    }

    console.log(board)

    return {render}
})()


// player factory function

const player = (name, marker) => {
    return {name, marker}
}

const player1 = player('Player 1', 'X')
const player2 = player('Player 2', 'O')


// Game Controller Module

function gameController() {





        // determine who's turn it is
        // win conditions
        // if moves are allowed
        // 




}