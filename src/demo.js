import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Navbar from './navbar';
import InputApp from './inputapp';
import App from './App';

function Demo(){
  return(
  	<Router>
  		<div className="main">
    	<Navbar/>
    	<Switch>
    		<Route exact path="/app" component={App} />
    		<Route exact path="/input" component={InputApp} />
    		
    	</Switch>
    	</div>
  	</Router>
    
  );

}

export default Demo;


