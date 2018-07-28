import React, { Component } from 'react';
import './header.css'

class Header extends Component {

	render(){
		return (
			<header>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 header__left'>
							<p>{ '{Paster}' }</p>
							<p><small>Paste and save you code</small></p>
						</div>
						<div className='col-md-8 header__right'></div>
					</div>
				</div>
			</header>
		);
	} 

}

export default Header;