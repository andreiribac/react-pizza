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

export const fetchPizzas = () => (dispatch) => {
	dispatch(setLoaded(false));
	axios.get('http://localhost:3001/pizzas').then(({ data }) => {
		dispatch(setPizzas(data));
	});
}
