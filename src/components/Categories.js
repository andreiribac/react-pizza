import React, { useState } from 'react'

const Categories = React.memo(
	function Categories({ items, onClickItem }) {
		const [activeItem, setActiveItem] = useState(null);

		const onSelectItem = (index) => {
			setActiveItem(index);
			onClickItem(index);
		}

		return (
			<div className="categories">
				<ul>
					<li
						className={activeItem === null ? 'active' : ''}
						// onClick={() => setActiveItem(null)}
						onClick={() => onSelectItem(null)}
					>
						Все
					</li>
					{items &&
						items.map((name, index) => {
							return (
								<li
									key={`${name}_${index}`}
									// onClick={() => setActiveItem(index)}
									onClick={() => onSelectItem(index)}
									className={activeItem === index ? 'active' : ''}
								>
									{name}
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
);

export default Categories;
