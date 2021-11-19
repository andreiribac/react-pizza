import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import { Header } from './components';
import { Home, Cart } from './pages';

const categoriesArr = [
	"Мясные",
	"Вегетарианская",
	"Гриль",
	"Острые",
	"Закрытые",
];
const sortsArr = [
	"популярности",
	"цене",
	"алфавиту",
];
function App() {

	const [pizzas, setPizzas] = React.useState([])

	useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			setPizzas(data.pizzas)
		});
		// fetch('http://localhost:3000/db.json')
		// 	.then((resp) => {
		// 		console.log('fetch', resp);
		// 		return resp.json()
		// 	})
		// 	.then(json => {
		// 		setPizzas(json.pizzas)
		// 	});
	}, [])

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route exact path="/" element={
						<Home
							category={categoriesArr}
							sort={sortsArr}
							pizzas={pizzas}
						/>
					} />
					<Route exact path="cart" element={<Cart />} />
					<Route path="*" element={"ошибка 404"} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
