import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap.min.css';
import { Pastes, Paste, PasteDetails } from './components/pastes.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

render(
	<Router>
		<App>
			<Route exact path='/' component={Pastes} />
			<Route path='/paste/:id' component={PasteDetails} />
		</App>
	</Router>,
  document.getElementById('root')
)