import Constants from '@/constants'
import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

export default function InvestInToday() {
	const [show, setShow] = useState(false)
    const { width } = useWindowSize()

	useEffect(() => {
		setShow(true)
	}, [])

	if (!show) {
		return null
	}

	return (
		<section className="services-section pt-0 pb-0 bg-gray">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-5">
						<div
							className="card"
							style={{
								position:
									width < Constants.tablet_width
										? 'sticky'
										: 'absolute',
								bottom: '25%',
								width:
									width < Constants.tablet_width
										? '100%'
										: '600px',
								zIndex: 10,
							}}
						>
							<div className="card-body p-5 my-5">
								<h3 className="font-weight-normal">
									Invest in today & watch your future
									flourish.
								</h3>
								<p className="text-muted">
									MOFI is tasked with thinking about tomorrow
									today.We aspire to grow our portfolio to a
									minimum of NGN 100 Trillion over the next 10
									years.
								</p>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-md-7">
						<img
							src={'/img/InvestInToday.svg'}
							alt="invest"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
