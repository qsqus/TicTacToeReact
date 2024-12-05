import { useEffect, useState } from 'react'
import Board from "./Board";
import GameFinished from './GameFinished';
import Restart from './Restart';

export const PLAYER_X = '❌';
export const PLAYER_O = '⭕';
export const GAME_STATE = {
    playerXWins: 0,
    playerOWins: 1,
    draw: 2,
    inProgress: 3
}

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [strikeClass, setStrikeClass] = useState('');
    const [gameState, setGameState] = useState(GAME_STATE.inProgress);

    const winningCombinations = [
        { combo: [0, 1, 2], strikeClass: 'strike-row-1' },
        { combo: [3, 4, 5], strikeClass: 'strike-row-2' },
        { combo: [6, 7, 8], strikeClass: 'strike-row-3' },

        { combo: [0, 3, 6], strikeClass: 'strike-column-1' },
        { combo: [1, 4, 7], strikeClass: 'strike-column-2' },
        { combo: [2, 5, 8], strikeClass: 'strike-column-3' },

        { combo: [0, 4, 8], strikeClass: 'strike-diagonal-1' },
        { combo: [2, 4, 6], strikeClass: 'strike-diagonal-2' }
    ];

    const checkWinner = (tiles, setStrikeClass) => {
        for (const { combo, strikeClass } of winningCombinations) {
            const tileValue1 = tiles[combo[0]];
            const tileValue2 = tiles[combo[1]];
            const tileValue3 = tiles[combo[2]];

            if (tileValue1 !== null &&
                tileValue1 === tileValue2 &&
                tileValue2 === tileValue3
            ) {
                setStrikeClass(strikeClass);

                tileValue1 === PLAYER_X ?
                    setGameState(GAME_STATE.playerXWins) :
                    setGameState(GAME_STATE.playerOWins)
                
                return;

            }

        }

        const areAllTilesFilled = tiles.every(tile => tile !== null);
        areAllTilesFilled && setGameState(GAME_STATE.draw);
    };

    useEffect(() => {
        checkWinner(tiles, setStrikeClass, setGameState);
    }, [tiles]);

    const handleTileClick = (idx) => {
        if (tiles[idx]) return;
        if (gameState !== GAME_STATE.inProgress) return;

        const updatedTiles = [...tiles];
        updatedTiles[idx] = playerTurn;
        setTiles(updatedTiles);
        updatePlayerTurn();
    }

    const updatePlayerTurn = () => {
        setPlayerTurn(p => p == PLAYER_X ? PLAYER_O : PLAYER_X);
    }

    const handleRestart = () => {
        setTiles(Array(9).fill(null));
        setPlayerTurn(PLAYER_X);
        setStrikeClass('');
        setGameState(GAME_STATE.inProgress);
    }

    return (
        <div>
            <Board
                playerTurn={playerTurn}
                tiles={tiles}
                onTileClick={handleTileClick}
                strikeClass={strikeClass}
            />

            <GameFinished gameState={gameState} />
            {gameState !== GAME_STATE.inProgress && <Restart handleRestart={handleRestart} />}
        </div>
    );
}

export default TicTacToe