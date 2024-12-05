function Restart (props) {
    return ( 
        <button onClick={props.handleRestart} className='restart-button'>
            Restart
        </button>
     );
}

export default Restart ;