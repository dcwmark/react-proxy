/* client/src/Components/DeleteItem/DeleteItem.jsx */

import React, { Component } from 'react';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class DeleteItem extends Component {

	render() {
		const toolTip =  `Delete this ${this.props.category}`;

		return (
			<div>
				<Glyphicon glyph="minus-sign"
						   title={toolTip} />
			</div>
		);
	}

}

export default DeleteItem;
