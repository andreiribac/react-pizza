import axios from 'axios';

// Action Creator - функция которая принимает динамические данные
export const setPizzas = (items) => ({
	type: "SET_PIZZAS",
	payload: items,
});
// Action - функция которая не передает обьект
// export const setPizzas = ({
// 	type: "SET_PIZZAS",
// });

export const setLoaded = (payload) => {
	return (
		{
			type: 'SET_LOADED',
			payload,
		}
	)
}

export const fetchPizzas = (category, sortBy) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED',
		payload: false,
	});
	axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
		dispatch(setPizzas(data));
	});
}

