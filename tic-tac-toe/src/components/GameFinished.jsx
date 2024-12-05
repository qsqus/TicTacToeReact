import { GAME_STATE, PLAYER_X, PLAYER_O } from "./TicTacToe";

function GameFinished(props) {
    let message = ''
    switch(props.gameState) {
        case GAME_STATE.inProgress:
            return <></>
        case GAME_STATE.draw:
            message = 'Draw';
            break;
        case GAME_STATE.playerXWins:
            message = `Winner: ${PLAYER_X}`;
            break;
        case GAME_STATE.playerOWins:
            message = `Winner: ${PLAYER_O}`;
            break;

    }

    return (
        <div className="game-finished">
            {message}
        </div>
    );
    
}

export default GameFinished;