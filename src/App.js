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

// function App() {

// 	// const [pizzas, setPizzas] = React.useState([])

// 	useEffect(() => {
// 		axios.get('http://localhost:3000/db.json').then(({ data }) => {
// 			setPizzas(data.pizzas)
// 		});
// 	}, [])

// 	return (
// 		<div className="wrapper">
// 			<Header />
// 			<div className="content">
// 				<Routes>
// 					<Route exact path="/" element={
// 						<Home
// 							category={categoriesArr}
// 							// sort={sortsArr}
// 							pizzas={pizzas}
// 						/>
// 					} />
// 					<Route exact path="cart" element={<Cart />} />
// 					<Route path="*" element={"ошибка 404"} />
// 				</Routes>
// 			</div>
// 		</div>
// 	);
// }
class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// const [pizzas, setPizzas] = React.useState([])
		// useEffect(() => {
		//   axios.get('http://localhost:3000/db.json').then(({
		//     data
		//   }) => {
		//     setPizzas(data.pizzas);
		//   });
		// }, []);
		return (<div className="wrapper">
			<Header />
			<div className="content">
				<Routes>
					<Route exact path="/" element={<Home category={categoriesArr} // sort={sortsArr}
						pizzas={[]} />} />
					<Route exact path="cart" element={<Cart />} />
					<Route path="*" element={"ошибка 404"} />
				</Routes>
			</div>
		</div>);
	}

}

// TODO 1.45.45 https://www.youtube.com/watch?v=jby4ePnSqo4&list=PL0FGkDGJQjJFMRmP7wZ771m1Nx-m2_qXq&index=6&t=1973s

export default App;
