import Constants from '@/constants'
import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

export default function TheScope() {
	return (
		<section className="news-section bg-gray">
			<div className="container py-0">
			<h3 className="text-theme mb-5 text-center">The Scope of Mofi's Activities</h3>
			<br />
			<br />
			<br />
				<EachScope
					img={`/img/growth.png`}
					heading={`High-growth priority sectors`}
					subHeading={`Up to 80% of funds for new investments may be devoted to identified sectors, including manufacturing, digital services, and agriculture.`}
				/>
				<EachScope
					img={`/img/assets.png`}
					heading={`Asset classes`}
					subHeading={`We ensure a well diversified portfolio across sectors and asset classes, from energy to manufacturing to agriculture.`}
					flip
				/>
				<EachScope
					img={`/img/geography.png`}
					heading={`Geography`}
					subHeading={`We aim to grow the portfolio in Nigeria while exploring Nigeria while exploring opportunities for diversification in the global market.`}
				/>
			</div>
		</section>
	)
}

const EachScope = ({ img, heading, subHeading, flip }) => {
	const { width } = useWindowSize()
	const [show, setShow] = useState(false)

	useEffect(() => {
		setShow(true)
	}, [])

	return (
		<div
			className={`row mb-5 justify-content-between ${
				flip && 'flex-row-reverse'
			}`}
		>
			<div className="col-sm-12 col-md-6 d-flex align-items-center">
				<div
					className="card shadow-sm"
					style={{
						zIndex: 10,
						// position:
						// 	width < Constants.tablet_width
						// 		? 'initial'
						// 		: 'relative',
						// left: 125,
						// top: 55,
						// minHeight: '400px',
						minWidth:
							width < Constants.tablet_width ? '200px' : '400px',
					}}
				>
					<div
						className="card-body d-flex flex-column justify-content-center"
						style={{ padding: 70 }}
					>
						<h4 className="font-weight-normal">{heading}</h4>
						<p className="text-muted m-0">{subHeading}</p>
					</div>
				</div>
			</div>
			<div className="col-sm-12 col-md-6">
				<img src={img} alt="invest" />
			</div>
		</div>
	)
}
