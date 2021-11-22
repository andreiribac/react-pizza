import { combineReducers } from 'redux';
import filtersReducer from './filters';
import pizzasReduxer from './pizzas';

const rootReducer = combineReducers({
	filters: filtersReducer,
	pizzas: pizzasReduxer,
});

export default rootReducer;