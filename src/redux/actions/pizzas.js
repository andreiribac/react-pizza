// Action Creator - функция которая принимает динамические данные
export const setPizzas = (items) => ({
	type: "SET_PIZZAS",
	payload: items,
});
// Action - функция которая не передает обьект
// export const setPizzas = ({
// 	type: "SET_PIZZAS",
// });
