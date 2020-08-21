import React from 'react';
import ReactDOM from 'react-dom';

function Validation (props){
	const style={
		color:"green",
	};
	var message = <h2 style={style}>Text too long</h2>;
	if(props.length <=6){
		message=<h2 style={{color:"red"}}>Short</h2>;
	}
	
	if(props.length==0){
		message="";
	}
		return(
			<div className="text">
				<p>{message}</p>
			</div>
		);
	
	
}
export default Validation;