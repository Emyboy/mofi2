import React from 'react'

export default ({ className, color }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"
				stroke={color ? color : '#1E944F'}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	)
}
