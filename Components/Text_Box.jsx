import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MarkedDown from './Mark_Down.jsx'

const getInitialState = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n'
        
//textarea for markdown previewer
class TextArea extends Component {
	constructor(props){
		super(props);

		this.state = { term: getInitialState };
	}

  render() {
    return (
		<div>
		<textarea 
			rows="30" 
			cols="50"
			className="col-md-4 left-side" 
			value = { this.state.term }
			onChange={event => this.setState({ term: event.target.value})}>				
		</textarea>	
		<MarkedDown term = {this.state.term} />
		</div>	
		)
  	}
}

export default TextArea;