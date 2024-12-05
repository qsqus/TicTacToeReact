function Tile(props) {

    let hoverClass = null;

    if (!props.value && props.playerTurn) {
        hoverClass = (props.playerTurn == '❌' ? 'x' : 'o') + '-hover';
    }

    return (
        <div
            onClick={props.onClick}
            className={`tile ${props.className} ${hoverClass}`}
        >
            {props.value}
        </div>
    );
}

export default Tile;