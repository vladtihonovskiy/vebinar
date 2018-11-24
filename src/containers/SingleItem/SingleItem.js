import React, { Component } from 'react';
import { array, func } from "prop-types";

class SingleItem extends Component {
	static propTypes = {
		list: array,
		onChangeListItem: func
	}

	state = {
		color: "",
		text: "",
	}

	componentDidMount() {
		const { list } = this.props;

		const index = list.findIndex((item) => {
			return item.id == this.props.match.params.id;
		});

		console.log(list[index]);

		this.setState({
			color: list[index].color,
			text: list[index].text
		});
	}

	onInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	onChangeBtnClick = () => {
		this.props.onChangeListItem(this.props.match.params.id, {
			text: this.state.text,
			color: this.state.color
		});
	}

	render() {
		const { color, text } = this.state;

		return (
			<div>
				<div className={"controls-wrapper"}>
					<input value={text} onChange={this.onInputChange} type="text" name={"text"} />
					<input onChange={this.onInputChange} type="color" name={"color"} />
					<button onClick={this.onChangeBtnClick}>Изменить</button>
				</div>
				<div className={"item-wrapper"}>
					<div
						style={{
							backgroundColor: color
						}} className={"item-container"}
					>
						<p>{text}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleItem;
