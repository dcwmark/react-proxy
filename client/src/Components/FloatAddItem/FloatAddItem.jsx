/* client/src/Components/FloatAddItem/FloatAddItem.jsx */

import React, { Component } from 'react';

import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class FloatAddItem extends Component {

	render() {
		const toolTip = `Add a ${this.props.category}`;

		return (
			<div className="float-add-item" >
				<Glyphicon glyph="plus-sign"
				           title={toolTip} />
			</div>
		);
	}
	
};

export default FloatAddItem;
