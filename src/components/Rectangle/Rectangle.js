import React, { Component } from "react";
import { string, object } from "prop-types";

import "./Rectangle.css";

class Rectangle extends Component {
	static propTypes = {
		text: string,
		style: object
	}

	static defaultProps = {
		text: "Пустой"
	}

	render() {
		const { text, style } = this.props;

		return(
			<div
				style={style}
				className={"rectangle"}>

				<p>{text}</p>
			</div>
		)
	}
}

export default Rectangle;
