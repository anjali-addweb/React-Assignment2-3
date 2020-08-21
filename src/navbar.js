import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './App.css';
class Navbar extends React.Component{
	render(){
		return(
			<div className="head">
			<nav>

		
			<ul>
			<li><Link to="/app" className="link" >Assignment 1</Link></li>
			<li><Link to="/input" className="link"  >Assignment 2</Link></li>
			
		</ul>

		</nav>

			</div>
		);
	}
}
export default Navbar;