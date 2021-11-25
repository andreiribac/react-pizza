import React from 'react';
import { Routes, Route } from "react-router-dom";

// import { useDispatch } from 'react-redux';
import './App.css';

import { Header } from './components';
import { Home, Cart } from './pages';


const App = () => {
	// const dispatch = useDispatch();

	
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

export default App;
