import React from 'react';
import ReactDOM from 'react-dom';

import InputApp from './inputapp';
import Userinput from './userinput';
import './App.css';

class Useroutput extends React.Component{
	

	// const link=props.isValid;
	// if(link){
	// 	return <InputApp />
	// }else {
	// 	return <Userinput />
	// }
	render(){
	
		return(

			<div className="content">
			<h3>Dear {this.props.value} ,  </h3>
			<p>Hello   , This is account.There are many variations of passages of Lorem Ipsum available, 
			but the majority have suffered alteration in some form, by injected humour,
			 or randomised words which dont look even slightly believable. 
			 If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt 
			 anything embarrassing hidden in the middle of text.</p>
			 <p>  {this.props.name} ,If you are going to use a passage of Lorem Ipsum, </p>
			 <h2>Thank you, </h2>
			 <h4>{this.props.name}</h4>
			
			 </div>

			
		);
	}
}
export default Useroutput;