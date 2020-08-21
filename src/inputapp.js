import React from 'react';
import ReactDOM from 'react-dom';
import Validation from './validation';
import Char from './char';
import './assignment2.css';
class InputApp extends React.Component{
	state={
		username:''
	};
	myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
   deleteHandler = (index) => {
    const chars = [...this.state.username.split("")];
    chars.splice(index, 1);
    this.setState({username: chars.join("")});
  }

	render(){
		const list = this.state.username.split('').map((ch,index) => {
      return <Char 
        char={ch}
        key={index}
        click={() => this.deleteHandler(index)} 
        />;
    });
	
	return (
		<div className="main">
			<label>Enter Text</label>	
			<input type="text" name="name" onChange={this.myChangeHandler} className="textbox" />
			<h1>Text:-{this.state.username} </h1>
			<p>Length:-{this.state.username.length}</p>
			<Validation length={this.state.username.length}/>
			{list}
		</div>
		
		);
	}
}

export default InputApp;