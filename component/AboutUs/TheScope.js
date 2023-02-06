import Constants from '@/constants'
import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

export default function TheScope() {
	return (
		<section className="news-section bg-gray">
			<h3 className="text-center">THE SCOPE OF MOFI’S ACTIVITIES</h3>
			<div className="container">
				<EachScope
					img={`/img/growth.png`}
					heading={`High-growth priority sectors`}
					subHeading={`Up to 80% of funds for new investments may be devoted to identified sectors, including manufacturing, digital services, and agriculture.`}
				/>
				<EachScope
					img={`/img/geography.png`}
					heading={`Geography`}
					subHeading={`We aim to grow the portfolio in Nigeria while exploring Nigeria while exploring opportunities for diversification in the global market.`}
				/>
				<EachScope
					img={`/img/assets.png`}
					heading={`Asset classes`}
					subHeading={`We ensure a well diversified portfolio across sectors and asset classes, from energy to manufacturing to agriculture.`}
				/>
			</div>
		</section>
	)
}

const EachScope = ({ img, heading, subHeading }) => {
	const { width } = useWindowSize()
	const [show, setShow] = useState(false)

	useEffect(() => {
		setShow(true)
	}, [])

	return (
		<div className="row mb-5 justify-content-between">
			<div className="col-sm-12 col-md-6">
				<div
					className="card shadow-sm"
					style={{
						zIndex: 10,
						position:
							width < Constants.tablet_width
								? 'initial'
								: 'relative',
						left: 125,
						top: 55,
						minHeight: '400px',
						minWidth: width < Constants.tablet_width ? '200px' : '400px',
					}}
				>
					<div className="card-body p-5 d-flex flex-column justify-content-center">
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
