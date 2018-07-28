import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js'
import {Pastes} from './components/pastes.js'

class App extends Component {

	render() {		
		return (
			<div>
				<Header/>
				<div id="content">
					{this.props.children}
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;
