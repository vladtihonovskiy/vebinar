import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import MainListPage from "./containers/MainListPage/MainListPage";
import SingleItem from "./containers/SingleItem/SingleItem";
import './App.css';

class App extends Component {
	state = {
		list: []
	}

	componentDidMount() {
		this.setState({
			list: JSON.parse(localStorage.getItem(("list")) || [])
		});
	}

	componentDidUpdate() {
		localStorage.setItem("list", JSON.stringify(this.state.list));
	}

	onAddNewListItem = (value) => {
		this.setState({
			list: [...this.state.list, value]
		});
	}

	onDeleteListItem = (id) => {
		const remainder = this.state.list.filter((todo) => {
			if (todo.id !== id) {
				return todo;
			}
		});

		this.setState({
			list: remainder
		});
	}

	onChangeListItem = (id, value) => {
		const changeItem = this.state.list.filter((todo) => {
			if (todo.id == id) {
				todo.color = value.color;
				todo.text = value.text;
				return todo;
			}
			return todo;
		});

		this.setState({
			list: changeItem
		});
	}

	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" render={() => <MainListPage list={this.state.list} onAddNewListItem={this.onAddNewListItem} onDeleteListItem={this.onDeleteListItem} />} />
					<Route path="/listItem/:id" render={(props) => <SingleItem list={this.state.list} onChangeListItem={this.onChangeListItem} {...props} />} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
