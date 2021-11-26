import React from "react"
import ContentLoader from "react-content-loader"

function LoadingBlock() {
	return (
		<ContentLoader
			className='pizza-block'
			speed={2}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="138" cy="145" r="123" />
			<rect x="0" y="300" rx="0" ry="0" width="280" height="25" />
			<rect x="0" y="330" rx="6" ry="6" width="280" height="84" />
			<rect x="3" y="425" rx="0" ry="0" width="83" height="26" />
			<rect x="136" y="420" rx="20" ry="20" width="140" height="40" />
			<rect x="198" y="440" rx="0" ry="0" width="20" height="6" />
		</ContentLoader>
	)
}

export default LoadingBlock;
