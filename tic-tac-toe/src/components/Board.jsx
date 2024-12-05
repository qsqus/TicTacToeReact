import Strike from "./Strike";
import Tile from "./Tile";

function Board(props) {

    return (
        <div className='board'>
            {props.tiles.map((tile, idx) => {
                let tileClass = '';
                if (idx % 3 != 2) tileClass += ' right-border';
                if (idx < 6) tileClass += ' bottom-border';

                return (
                    <Tile
                        key = {idx}
                        playerTurn = {props.playerTurn}
                        onClick = {() => props.onTileClick(idx)}
                        value = {props.tiles[idx]}
                        className = {tileClass.trim()}
                    />
                );
            })}

            <Strike strikeClass={props.strikeClass}/>
        </div>
    );

}

export default Board;