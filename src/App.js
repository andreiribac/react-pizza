import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {
	const dispatch = useDispatch();
	// const {items} = useSelector(({ pizzas, filters }) => {
	// 	return {
	// 		items: pizzas.items,
	// 		// sortBy: filters.sortBy
	// 	};
	// });

	useEffect(() => {
		axios.get('http://localhost:3001/pizzas').then(({ data }) => {
			dispatch(setPizzas(data));
		});
	}, []);
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="cart" element={<Cart />} />
					<Route path="*" element={"ошибка 404"} />
				</Routes>
			</div>
		</div>
	);
};

//  (state) => {
// 	return {
// 		items: state.pizzas.items,
// 		filters: state.filters,
// 	};
// };
// const mapDispatchToProps = {
// 	setPizzas,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
