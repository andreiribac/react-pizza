import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, PizzaBlock, SortPopup, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryName = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые", ];
const sortItems = [
	{ name: 'популярности', type: 'popular', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавит', type: 'name', order: 'asc' },
]

function Home() {
	const dispatch = useDispatch();
	const items = useSelector(({ pizzas }) => pizzas.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy} = useSelector(({ filters }) => filters);
	console.log('sortBy: ', sortBy);

	React.useEffect(() => {
		dispatch(fetchPizzas());
	}, [category, sortBy]);

	const onSelectCategory = React.useCallback(
		(index) => {
			dispatch(setCategory(index))
		},
		[],
	)
	const onSelectSortType = React.useCallback(
		(type) => {
			dispatch(setSortBy(type))
		},
		[],
	)

	return (
		<div className="container">
			<div className="content__top">
				<Categories
					activeCategory={category}
					onClickCategory={onSelectCategory}
					items={categoryName}
				/>
				<SortPopup
					activeSortType={sortBy}
					items={sortItems}
					onSelectSortType={onSelectSortType}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoaded
					? items.map(pizza => {
						return (
							<PizzaBlock
								key={pizza.id}
							isLoading={true}
								{...pizza}
							/>
						)
					})
					: Array(12).fill(0).map((_, index) => (<PizzaLoadingBlock key={index} />))
				}
			</div>
		</div>
	)
}

export default Home
