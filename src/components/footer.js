import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

	render(){
		return (
			<footer>
				<div className='container d-flex justify-content-center align-items-center'>
					<div className='text-center'>
						Copyright 2018Y. <a href="https://web-panda.ru/">web-panda</a>
					</div>	
				</div>
			</footer>
		);
	} 

}

export default Footer;