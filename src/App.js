import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Products from './Products';
import Rating from './Rating';
import { Button } from 'react-bootstrap';

class App extends Component {

	formatName(user) {
		return user.firstName + user.lastName;
	}



	render() {
		const isValid=false;
		const user = {
			firstName: 'Paul',
			lastName: 'Beavers'
		};

		return(
			<div className="App">
				<Products />
			</div>
		);
	}
}

export default App;
