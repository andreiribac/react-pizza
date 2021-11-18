import React, { useState } from 'react'

function Categories({ items, onClick }) {
	const [activeItem, setActiveItem] = useState(null);

	const onSelectItem = (index) => {
		setActiveItem(index);
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

// class Categories extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	state = {
// 		activeItem: null,
// 	}

// 	onSelectItem = index => {
// 		this.setState({
// 			activeItem: index,
// 		})
// 	}

// 	render() {
// 		return (<div className="categories">
// 			<ul>
// 				<li className="active">Все</li>
// 				{this.props.items.map((name, index) => {
// 					return <li
// 						className={this.state.activeItem === index ? 'active' : ''}
// 						key={`${name}_${index}`} // onClick={() => onClick(`${name}`)}
// 						onClick={() => this.onSelectItem(index)}
// 					>
// 						{name}
// 					</li>;
// 				})}
// 			</ul>
// 		</div>);
// 	}

// }

export default Categories;
