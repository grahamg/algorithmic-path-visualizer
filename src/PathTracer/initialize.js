const initializeGrid = () => {
	const grid = [];
	for (let row = 0; row < 20; row++) {
		const currentRow = [];
		for (let column = 0; column < 50; col++) {
			currentRow.push(createNode(column, row));
		}
		grid.push(curentRow);
	}
	return grid;
};

const initializeNode = (column, row) => {
	return {
		column, row
	};
};