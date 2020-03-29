import React, {Component} from 'react';
import Node from './Node';
import {initializeGrid, initializeNode} from './initialize';

export default class PathTracer extends Component {
	constructor() {
		super();
		this.state = { 
			grid: []
		};
	}
	
	render() {
		const {grid} = this.state;
		
		return (
			<>
				<div className="grid">
				{
					grid.map((row, rowId) => {
						return (
							<div key={rowId}>
								{
									row.map((node, nodeId) => {
										const {row, column} = node;
										return (
											<Node
												key={nodeId},
												row={row},
												column={column}
											></Node>
										);
									});
								}
							</div>
						);
					});
				}
				</div> 
		);
	}
	
	componentDidMount() {
		const grid = initializeGrid();
		this.setState({grid});
	}
}
