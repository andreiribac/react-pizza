import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux'
import './App.css';
import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';
import filters from './redux/reducers/filters';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			this.props.setPizzas(data.pizzas);
		});
	}

	render() {
		console.log(this.props);
		return (
			<div className="wrapper">
				<Header />
				<div className="content">
					<Routes>
						<Route exact path="/" element={<Home pizzas={this.props.items} />} />
						<Route exact path="cart" element={<Cart />} />
						<Route path="*" element={"ошибка 404"} />
					</Routes>
				</div>
			</div>
		);
	}

}

const mapStateToProps = state => {
	return {
		items: state.pizzas.items,
		filters: state.filters,
	};
};
const mapDispatchToProps = {
	setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
