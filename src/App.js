
import React from 'react';
import logo from './logo.svg';

import './App.css';
import Userinput from './userinput';
import Useroutput from './useroutput';
import InputApp from './inputapp';

class App extends React.Component{
  state = {
    username: 'Employee'
  }
  
   eventHandler = (e) => {
    this.setState({
      username: [
        e.target.value
      ]
    });
  }

  render(){
  return (
    
    <div className="head">
    
    <Userinput change={this.eventHandler}/>
    <Useroutput name="Anjali" value={this.state.username}  />
    
    </div>
    
  );
}
}

export default App;
