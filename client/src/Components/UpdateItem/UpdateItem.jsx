/* client/src/Components/UpdateItem/UpdateItem.jsx */

import React, { Component } from 'react';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class UpdateItem extends Component {

	render() {
		const toolTip = `Make changes to this ${this.props.category}`;

		return (
			<div>
				<Glyphicon glyph="pencil"
				           title={toolTip} />
			</div>
		);
	}

}

export default UpdateItem;
