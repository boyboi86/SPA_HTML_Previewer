import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TextArea from './Components/Text_Box.jsx';

class App extends Component {
	
	render(){
		return (
			<div>
				<TextArea />
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('App'));