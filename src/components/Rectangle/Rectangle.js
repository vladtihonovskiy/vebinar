import React, { Component } from "react";
import { string} from "prop-types";

import "./Rectangle.css";

class Rectangle extends Component {
	static propTypes = {
		text: string
	}

	static defaultProps = {
		text: "Пустой"
	}

	render() {
		const { text } = this.props;

		return(
			<div className="rectangle">
				<p>{text}</p>
			</div>
		)
	}
}

export default Rectangle;
