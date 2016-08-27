import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMD from 'react-markdown';

const MarkDown = (props) => {
	return (
 	<ReactMD className="col-md-4 right-side well form-control" source={props.term} />
	)
}

export default MarkDown;