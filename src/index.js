import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import Addpaste from './components/addPaste.js';
import { Pastes, Paste, PasteDetails } from './components/pastes.js';

render(
	<Router>
		<App>
			<Route exact path='/' component={Pastes} />
			<Route path='/paste/:id' component={PasteDetails} />
			<Route path='/addpaste' component={Addpaste} />
		</App>
	</Router>,
  document.getElementById('root')
)