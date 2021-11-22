import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components';

function Home({ sort, pizzas }) {
	return (
		<div className="container">
			<div className="content__top">
				<Categories
					onClick={(name) => console.log(name)}
					items={[
						"Мясные",
						"Вегетарианская",
						"Гриль",
						"Острые",
						"Закрытые",
					]}
				/>
				<SortPopup items={[
					{
						name: "популярности",
						type: "popular",
					},
					{
						name: "цене",
						type: "price",
					},
					{
						name: "алфавиту",
						type: "alphabet"
					}
				]} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{pizzas.map(pizza => {
					return (
						<PizzaBlock
							key={pizza.id}
							// id={pizza.id}
							// imageUrl={pizza.imageUrl}
							// name={pizza.name}
							// types={pizza.types}
							// sizes={pizza.sizes}
							// price={pizza.price}
							// category={pizza.category}
							// rating={pizza.rating}
							{...pizza}
						/>
					)
				})}

			</div>
		</div>
	)
}

export default Home
