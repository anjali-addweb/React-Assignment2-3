import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
function Userinput(name){
	const mystyle={
		color:"#616063",
		fontFamily:"Algerian",
		textAlign:"center",
		textDecoratio:"underline",
		fontSize:"45px",

	}
		return(
			<div className="style">
			<form>
			<h1 style={mystyle}> Enter Name :- </h1>
  			<label>
    			 Name Of Employee:
    			<input type="text" name="name" onChange={name.change} />
  			</label>
  			
			</form>
			</div>
		);
	
}
export default Userinput;