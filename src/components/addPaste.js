import React, { Component } from 'react';
import './addPaste.css';
import { Link } from 'react-router-dom'

class AddPaste extends Component {
	constructor() {
		super(...arguments);
		this.languages = [
			'JavaScript', 'CSS', 'HTML', 'Java', 'Pascal', 'Basic', 'NodeJS'
		];
		this.state = {
			name: '',
			author: '',
			language: this.languages[0],
			code: ''
		};

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	    this.setState({ [event.target.name] : event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();

		for(let name in this.state)
			if(!this.state[name]) {
				alert(`Field ${name} is requaried!!!`);
				return;
			}
	}

	render() {
		let languagesView = this.languages.map((el,key)=>{
			return <option key={key}>{el}</option>
		});

		return (
			<div className="container">
				<h1>Add paste</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group row">
						<label className="col-2 col-form-label">Name</label>
						<div className="col-10">
							<input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-2 col-form-label">Author</label>
						<div className="col-10">
							<input className="form-control" type="text"  name="author" value={this.state.author} onChange={this.handleChange}/>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-2 col-form-label">Language</label>
						<div className="col-10"  value={this.state.language} onChange={this.handleChange}>
							<select className="form-control" name="language">{languagesView}</select>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-2 col-form-label">Code</label>
						<div className="col-10">
							<textarea className="form-control"  name="code" value={this.state.code} onChange={this.handleChange}></textarea>
						</div>
					</div>

					<button className='btn btn-success' type='submit'>Create</button>
				</form>
			</div>
		);
	}
}

export default AddPaste;