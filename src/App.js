import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Products from './Products';
import ButtonBar from './ButtonBar';
import Rating from './Rating';


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
				<ButtonBar />
				<Products />
			</div>
		);
	}
}

export default App;
