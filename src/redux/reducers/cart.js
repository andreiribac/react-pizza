const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0,
}


const cart = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PIZZA_CART':
			return {
				...state,
				items: {
					// если хотим добалять динамический обьект, ключ то обворачиваем в [] - [action.payload.id]
					[action.payload.id]: [
						...state.items[action.payload.id],
						action.payload,
					]
				}
			};
		
		// case 'SET_TOTAL_PRICE':
		// 	return {
		// 		...state,
		// 		totalPrice: action.payload
		// 	};


		// case 'SET_TOTAL_COUNT':
		// 	return {
		// 		...state,
		// 		totalC: action.payload
		// 	};

		default:
			return state;
	}

}

export default cart;