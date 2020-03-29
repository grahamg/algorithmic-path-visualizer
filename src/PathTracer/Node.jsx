import React, {Component} from 'react';

export default class Node extends Component {
	render() {
		const {row, column} = this.props;
		
		return (
			<div id={`node-${row}-${column}`}
			</div>
		);	
	}
}