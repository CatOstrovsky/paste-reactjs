import React, { Component } from 'react';
import './pastes.css';
import { Link } from 'react-router-dom'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/dracula.css'

class Paste extends Component {
	constructor() {
		super(...arguments);
	};

	render() {
		let code = (this.props.code) ? this.props.code : {};
		if(!code) return;

		return (
			<div className={`col-md-6`}>
				<Link className='paste' to={{
					pathname: `/paste/${code.id}`,
					state: { code: code }
				}}>
					<div className="d-flex">
						<p className='paste__id'>#{code.id}</p>					
						<p className='paste__date'>{code.date}</p>
					</div>
					<p className='paste__name'>{code.name}</p>
					<p className='paste__author'>By {code.author}</p>
				</Link>
			</div>
		)
	}
}

class PasteDetails extends Component {
	constructor(match){
		super(...arguments);
		this.codes = [
			{ id: 1, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!', language: 'js' },
			{ id: 2, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!', language: 'js' },
			{ id: 3, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!', language: 'js' },
			{ id: 4, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!', language: 'js' },
			{ id: 5, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!', language: 'js' },
			{ id: 6, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!', language: 'js' },
		];
	}

	render() {
		let id = this.props.match.params.id,
		code = this.codes.find((el) => {
			return el.id == id;
		});

		return(
			<div className="container details-paste">
				<Link to={{pathname:"/"}} className="btn btn-primary">{'<'} Back</Link>
				<div className="d-flex align-items-end details-paste__title-wrapper">
					<h1>{code.name}</h1>
					<small>{code.date}</small>
				</div>
				<p>By {code.author}.</p>
				<hr/>
				<p>Code language: {code.language}</p>
				<Highlight className='javascript'>
				  {code.code}
				</Highlight>
			</div>
		);
	}
}

class Pastes extends Component {	
	constructor(){
		super(...arguments);

		this.codes = [
			{ id: 1, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!' , language: 'js'},
			{ id: 2, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!' , language: 'js'},
			{ id: 3, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!' , language: 'js'},
			{ id: 4, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!' , language: 'js'},
			{ id: 5, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!' , language: 'js'},
			{ id: 6, name: 'Simple code', author: 'Petar One', date:  new Date().toDateString(), code: 'hello world!' , language: 'js'},
		];
	}
	render() {
		let codes = (this.props.codes) ? this.props.codes : this.codes;
		if(!codes) return;

		let renderedCodes = codes.map((code) => {
			return <Paste code={code}  key={code.id}/>
		});

		return (
			<div className='container'>
				<div className='row listing-pastes'>
					{renderedCodes}
				</div>

				<Link to={{pathname:'/addpaste'}} className="btn-primary btn add-paste">Add paste +</Link>
			</div>
		)
	}
}

export {Pastes, Paste, PasteDetails};