import React, { Component } from 'react';
import './header.css'
import { Link } from 'react-router-dom'

class Header extends Component {

	render(){
		return (
			<header>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 header__left'>
							<Link to={{ pathname: '/' }}>
								<p>{ '{CodePaster}' }</p>
								<p><small>Paste and save you code</small></p>
							</Link>
						</div>
						<div className='col-md-8 header__right'></div>
					</div>
				</div>
			</header>
		);
	} 

}

export default Header;