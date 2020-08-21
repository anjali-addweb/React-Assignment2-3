import React from 'react';
import ReactDOM from 'react-dom';
const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '3px solid black',
        textAlign: 'center',
        fontSize:'25px',
        backgroundColor:'lightgrey'
    };
    return(
    	<div style={style} onClick={props.click}>
    		{props.char}
    	</div>
    );
}
export default Char;