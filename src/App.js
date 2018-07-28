import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js'
import {Pastes} from './components/pastes.js'

class App extends Component {
	constructor() {
		super(...arguments);
		let db = openDatabase("PasteDB", "0.1", "A list of to do items.", 200000);
		db.transaction((tx)=>{
			tx.executeSql("SELECT COUNT(*) FROM pastes", [], (result)=>{ console.log(result) }, (tx, error)=>{
				tx.executeSql("CREATE TABLE pastes (id REAL UNIQUE, label TEXT, timestamp REAL)", [], null, null);

				tx.executeSql("INSERT INTO pastes (label, timestamp) values(?, ?)", [
						"Купить iPad или HP Slate",
						new Date().getTime()
					], null, null);
			})
		});

	}

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
