import React, { Component } from 'react';
import { func, array } from "prop-types";
import { Link } from 'react-router-dom';
import "./MainListPage.css";

class MainListPage extends Component {
	static propTypes = {
		list: array,
		onAddNewListItem: func,
		onDeleteListItem: func
	}

	state = {
		color: "",
		text: ""
	}

	onInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	onAddButtonClick = () => {
		this.props.onAddNewListItem({
			id: Date.now(),
			text: this.state.text,
			color: this.state.color
		});

		this.setState({
			text: ""
		});
	}

	onDeleteButtonClick = (id) => () => {
		this.props.onDeleteListItem(id);
	}

	renderTodos = (item) => {
		const { color, text, id } = item;

		return (
			<div key={id} className={"item-wrapper"}>
				<div
					style={{
						backgroundColor: color
					}} className={"item-container"}
				>
					<p>{text}</p>
					<div>
						<button onClick={this.onDeleteButtonClick(id)}>
							Удалить
						</button>
						<Link to={`/listItem/${id}`}>
							Изменить
						</Link>
					</div>
				</div>
			</div>
		);
	}

	render() {
		const { text } = this.state;

		const { list } = this.props;

		return (
			<>
				<div className={"controls-wrapper"}>
					<input value={text} onChange={this.onInputChange} type="text" name={"text"} />
					<input onChange={this.onInputChange} type="color" name={"color"} />
					<button onClick={this.onAddButtonClick}>Добавить</button>
				</div>
				<div className={"main-wrapper"}>
					{list.map((item) => {
						return this.renderTodos(item);
					})}
				</div>
			</>
		);
	}
}

export default MainListPage;
