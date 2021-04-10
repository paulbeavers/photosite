import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ButtonBar extends Component  {

	constructor(props) {
		super(props);
        this.state = {clickCount: 0};
	}

    handleClick = () => {
        console.log("button pressed");
        this.setState({clickCount: this.state.clickCount + 1})
    }

	render() {
		return (
            <div>
                    <br/>
                    <Button variant='primary'  onClick={this.handleClick}>Primary</Button>
                    <h1>{this.state.clickCount}</h1>
  
                    <br/>
                    <br/>
                
          </div>
		);
	}
}

export default ButtonBar;
